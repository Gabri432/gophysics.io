package main

import (
	"html/template"
	"log"
	"net/http"
)

type HttpResponseJson struct{}

type multiplexer map[string]http.Handler

type WebPage struct {
	TitlePage  string
	htmlToLoad []string
}

var mux = multiplexer{
	"/":        WebPage{"gophysics.io", []string{"index.html"}},
	"/about":   WebPage{"About", []string{"templates/about.html", "templates/header.html", "templates/footer.html"}},
	"/docs":    WebPage{"Gophysics documentation", []string{"templates/docs.html", "templates/header.html", "templates/footer.html"}},
	"/contact": WebPage{"Contact information", []string{}},
}

func main() {
	//https://gabri432.github.io/gophysics.io/
	log.Fatal(http.ListenAndServe("https://gabri432.github.io/gophysics.io", mux))
}

func (m multiplexer) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	log.Println(m[r.RequestURI])
	if handler, ok := m[r.RequestURI]; ok {
		handler.ServeHTTP(w, r)
	} else {
		w.WriteHeader(http.StatusNotFound)
	}
}

func (wP WebPage) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	htmlPage, err := template.ParseFiles(wP.htmlToLoad...)
	if err != nil {
		log.Println(err)
		errorPage(w, r)
	}
	htmlPage.Execute(w, HttpResponseJson{})
}

func errorPage(w http.ResponseWriter, r *http.Request) {}

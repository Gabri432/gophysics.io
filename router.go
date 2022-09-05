package main

import (
	"html/template"
	"log"
	"net/http"
)

type HttpResponseJson struct{}

type multiplexer map[string]http.Handler

type WebPage struct {
	TitlePage string `json:"titlePage"`
}

var mux = multiplexer{
	"/":        WebPage{"gophysics.io"},
	"/about":   WebPage{"About"},
	"/docs/":   WebPage{"Gophysics documentation"},
	"/contact": WebPage{"Contact information"},
}

func main() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/about", about)
	http.HandleFunc("/contact", contact)
	http.HandleFunc("/docs", docs)
	log.Fatal(http.ListenAndServe("https://gabri432.github.io/gophysics.io/", mux))
}

func (m multiplexer) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if handler, ok := m[r.RequestURI]; ok {
		handler.ServeHTTP(w, r)
	} else {
		w.WriteHeader(http.StatusNotFound)
	}
}

func (wP WebPage) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	switch wP.TitlePage {
	case "/":
		homePage(w, r)
	case "/about":
		about(w, r)
	case "/docs":
		docs(w, r)
	case "/contact":
		contact(w, r)
	default:
		errorPage(w, r)
	}
}

func homePage(w http.ResponseWriter, r *http.Request) {
	myTemplates := []string{"templates/index.html", "templates/header.html", "templates/footer.html"}
	htmlPage, err := template.ParseFiles(myTemplates...)
	if err != nil {
	}
	htmlPage.Execute(w, HttpResponseJson{})
}
func about(w http.ResponseWriter, r *http.Request)     {}
func contact(w http.ResponseWriter, r *http.Request)   {}
func docs(w http.ResponseWriter, r *http.Request)      {}
func errorPage(w http.ResponseWriter, r *http.Request) {}

class Formula {
    constructor(name, formula, measurementUnit) {
        this.name = name;
        this.formula = formula;
        this.measurementUnit = measurementUnit;
    }
}

class Constant {
    constructor(name, value, measurementUnit) {
        this.name = name;
        this.value = value;
        this.measurementUnit = measurementUnit;
    }
}

// List of all functions
const Acceleration = new Formula("Acceleration (force, mass float64)", "force/mass.", "m/s^2")
const AngularFreq = new Formula("AngularFreq (time float64)", "(2 * greekPi) / time", "rad/s")
const CentripetalAccel = new Formula("CentripetalAccel (speed, radius float64)", "(speed^2) / radius", "m/s^2")
const CentripetalForce = new Formula("CentripetalForce (mass, speed, radius float64)", "(mass * speed^2) / radius", "N")
const Density = new Formula("Density (weight, volume float64)", "weight/volume", "kg/m^3")
// Making some space
const DopplerCloser = new Formula("DopplerCloser (speed, frequence float64)", "(1 + (speed / 340)) * frequence", "hertz")
const DopplerFarer = new Formula("DopplerFarer (speed, frequence float64)", "(1 - (speed / 340)) * frequence", "hertz")
const DriftSpeed = new Formula("DriftSpeed (intensity, chargeCarrierDensity, area, particleCharge float64)", "intensity / (chargeCarrierDensity * area * particleCharge)", "m/s")
const ElectricField = new Formula("ElectricField (charge, radius float64)", "(charge) / (4 * greekPi * Vacuum Premittivity constant * radius^2)", "N/C")
// Making some space
const ElectricPotentDiff = new Formula("ElectricPotentDiff (charge, distance1, distance2 float64)", "(charge / (4 * greekPi * Vacuum Premittivity constant)) * ((1 / distance1) - (1 / distance2))", "V")
const ElectricPotentEnergyDiff = new Formula("ElectricPotentEnergyDiff (charge1, charge2, distance1, distance2 float64)", "[(charge1 * charge2) / (4 * greekPi * Vacuum Premittivity constant)] * ((1 / distance1) - (1 / distance2))", "J")
const ElectricPotential = new Formula("ElectricPotential (charge, distance float64)", "(charge) / (4 * greekPi * Vacuum Premittivity constant * distance)", "V")
const EnergyDens = new Formula("EnergyDens (electricFieldModule float64)", "(1 / 2) * Vacuum Premittivity constant * (electricFieldModule * electricFieldModule)", "J/m^3")
const EnergyDensity = new Formula("EnergyDensity (electricField, magneticField float64)", "(1/2)*Dieletric constant on vacuum*(electricField*electricField) + (1/(2*Vacuum Premittivity constant))*(magneticField*magneticField)", "J/m^3")
const EscapeSpeed = new Formula("EscapeSpeed (mass, radius float64)", "[(2*G*mass)/(radius)]^(1/2)", "m/s")
// Making some space
const Force = new Formula("Force (mass, acceleration float64)", "mass*acceleration", "N")
const Frequency = new Formula("Frequency (speed, distance float64)", "speed / distance", "hertz")
const GaussFlux = new Formula("GaussFlux (charge float64)", "charge / Vacuum Premittivity constant", "N*m^2/C")
const GravAttract = new Formula("GravAttract (mass1, mass2, distance float64)", "(G * mass1 * mass2) / (distance^2)", "m/s^2")
const GravField = new Formula("GravField (mass, distance float64)", "(constants.G * mass) / (distance^2)", "m/s^2")
const HeatFlux = new Formula("HeatFlux (thermalConductivityConstant, startingTemperatureKelvin, finalTemperatureKelvin, distance float64)", "-1 * thermalConductivityConstant * (finalTemperatureKelvin - startingTemperatureKelvin) / distance", "W")
const Intensity = new Formula("Intensity (power, area float64)", "power/area", "W/m^2")
// Making some space
const JouleHeating = new Formula("JouleHeating (resistance, currentIntensity float64)", "resistance * (currentIntensity * currentIntensity)", "W")
const KineticEner = new Formula("KineticEner (mass, speed float64)", "(1 / 2) * mass * (speed * speed)", "J")
const LawCoulomb = new Formula("LawCoulomb (charge1, charge2, distance float64)", "COULOMB constant * (|charge1| * |charge2|) / (distance^2)", "N")
const LawGayLussacPressure = new Formula("LawGayLussacPressure (pressure, celsiusDeg_Temperature float64)", "pressure * (1 + (1/273)*(celsiusDeg_Temperature))", "Pascal")
const LawGayLussacVolume = new Formula("LawGayLussacVolume (volume, celsiusDeg_Temperature float64)", "volume * (1 + (1/273)*(celsiusDeg_Temperature))", "m^3")
// Making some space
const LawHagenPoiseuille = new Formula("LawHagenPoiseuille (fluidViscosity, pipeLength, flowRate, pipeRadius float64)", "((8 * fluidViscosity * pipeLength * flowRate) / (greekPi * pipeRadius^4))", "Pascal")
const LawOhm1 = new Formula("LawOhm1 (resistance, currentIntensity float64)", "resistance * currentIntensity", "V")
const LawOhm2 = new Formula("LawOhm2 (resistivity, length, area float64)", "resistivity * length / area", "Ohm")
const LawStokes = new Formula("LawStokes (fluidViscosity, radius, speed float64)", "6 * greekPi * fluidViscosity * radius * speed", "N")
const LorentzFactor = new Formula("LorentzFactor (speed float64)", "1/{[1-(speed^2)/(C^2)]^(1/2)}", "None")
// Making some space
const MechanicalEner = new Formula("MechanicalEner (potential, kinetic float64)", "potential + kinetic", "J")
const Momentum = new Formula("Momentum (mass, speed float64)", "mass * speed", "kg*m/s")
const NeatHeatEnergyTransfer = new Formula("NetHeatEnergyTransfer (thermalConductivityConstant, area, kelvinDeg_HeatVariation, time, width float64)", "-1 * (thermalConductivityConstant * area * kelvinDeg_HeatVariation * time) / (width)", "J")
const NormalForce = new Formula("NormalForce (mass, angleInDeg float64)", "mass * Cosine(angleInDeg/radiant)", "N")
const PendulumPeriod = new Formula("PendulumPeriod (pendulumLength float64)", "(2 * greekPi) * (pendulumLength/G)^(1/2)", "s")
const PhotoElettricEffect = new Formula("PhotoElettricEffect (frequence float64)", "Planck constant * frequence", "J")
// Making some space
const PotentialElasticEner = new Formula("PotentialElasticEner (elasticConstant, distance float64)", "(1 / 2) * elasticConstant * (distance^2)", "J")
const PotentialEner = new Formula("PotentialEner (mass, acceleration, height float64)", "mass * acceleration * height", "J")
const PotentialGravEner = new Formula("PotentialGravEner (mass, height float64)", "mass * g * height", "J")
const PotentialGravEner2 = new Formula("PotentialGravEner2 (mass1, mass2, distance float64)", "-1 * ((constants.G * mass1 * mass2) / (distance))", "J")
const Power = new Formula("Power (work, time float64)", "work / time", "W")
// Making some space
const Pressure = new Formula("Pressure (normalForce, area float64)", "normalForce / area", "Pascal")
const ProjectileFlightTime = new Formula("ProjectileFlightTime (initialVelocity, angleInDeg float64)", "2 * initialVelocity * Sine(angleInDeg/1 radiant)", "s")
const ProjectileMaxHeight = new Formula("ProjectileMaxHeight (initialVelocity, angleInDeg float64)", "(initialVelocity^2 * SineSquare(angleInDeg/1 radiant)) / (2 * G)", "m")
const ProjectileMaxRange = new Formula("ProjectileMaxRange (initialVelocity, angleInDeg float64)", "(initialVelocity^2 * SineSquare(angleInDeg/1 radiant))", "m")
const RelativDist = new Formula("RelativDist (nonTravelerDistance, speed float64)", "nonTravelerDistance/Y (Y=Lorentz factor)", "m")
const RelativMass = new Formula("RelativMass (travelerMass, speed float64)", "mass*Y (Y=Lorentz factor)", "kg")
const RelativMomentum = new Formula("RelativMomentum (travelerMomentum, speed float64)", "(travelerMomentum * speed)*Y (Y=Lorentz factor)", "kg*m/s")
const RelativTime = new Formula("RelativTime (travelerTime, speed float64)", "travelerTime/Y (Y=Lorentz factor)", "s")
const Resistance = new Formula("Resistance (resistance, currentIntensity float64)", "see 'JouleHeating'", "W")
// Making some space
const SelfCapacitance = new Formula("SelfCapacitance (charge, potential float64)", "charge/potential", "C/V")
const SelfCapacitanceSphere = new Formula("SelfCapacitanceSphere (radius float64)", "4 * greekPi * Vacuum Premittivity constant * radius", "C/V")
const Speed = new Formula("Speed (distance, time float64)", "distance/time", "m/s")
const Time = new Formula("Time (distance, speed float64)", "distance/speed", "s")
const Voltage = new Formula("Voltage (charge, distance1, distance2 float64)", "see 'ElectricPotentDiff'", "V")
const Work = new Formula("Work (force, distance float64)", "force*distance", "J")

const functionsList = [Acceleration, AngularFreq, CentripetalAccel, CentripetalForce, Density, DopplerCloser, 
    DopplerFarer, ElectricField, ElectricPotentDiff, ElectricPotentEnergyDiff, EnergyDens, EnergyDensity, EscapeSpeed,
    Force, Frequency, GaussFlux, GravAttract, GravField, HeatFlux, Intensity, LawCoulomb, LawGayLussacPressure, LawGayLussacVolume,
    LawHagenPoiseuille, LawOhm1, LawOhm2, LawStokes, LorentzFactor, MechanicalEner, Momentum, NeatHeatEnergyTransfer,
    NormalForce, PendulumPeriod, PhotoElettricEffect, PotentialElasticEner, PotentialEner, PotentialGravEner, PotentialGravEner2,
    Power, Pressure, ProjectileFlightTime, ProjectileMaxHeight, ProjectileMaxRange, RelativDist, RelativMass, RelativMomentum,
    RelativTime, Resistance, Time, Voltage, Work
]

// List of all constants
const gravity = new Constant("Earth gravity", "9.81", "m/s^2")
const c = new Constant("C (Light Speed on vacuum)", "299792452", "m/s")
const lunarDist = new Constant("Earth-Moon Distance", "384,000,000", "m")
const lunarDistMax = new Constant("Max Earth-Moon Distance", "405,000,000", "m")
const lunarDistMin = new Constant("Min Earth-Moon Distance", "362,000,000", "m")
const sound = new Constant("sound speed (on vacuum)", "340", "m/s")
const au = new Constant("Astronomical unit", "1.49*10^11", "m")
const parsec = new Constant("Parsec", "3.08*10^16", "m")
// Making some space
const earthMass = new Constant("Earth mass", "5.98*10^24", "kg")
const sunMass = new Constant("Sun mass", "1.98*10^30", "kg")
const moonMass = new Constant("Moon mass", "7.342*10^22", "kg")
const earthRadius = new Constant("Earth radius", "6.378*10^6", "m")
const sunRadius = new Constant("Sun radius", "6.9634*10^8", "m")
const moonRadius = new Constant("Moon Radius", "1.731*10^6", "m")
const G = new Constant("Universal Gravity Constant", "6.67*10^-11", "(N*m^2)/kg^2")
const lightYear = new Constant("Light year", "9.46*10^15", "m")
// Making some space
const hubble = new Constant("Hubble constant", "69.8", "(km/s)/Mpc, Mpc is MegaParsec")
const protonMass = new Constant("Proton mass", "1.672e-27", "kg")
const electronMass = new Constant("Electron mass", "9.109*10^-31", "kg")
const neutronMass = new Constant("Neutron mass", "1.674*10^-27", "kg")
const absZero = new Constant("Absolute Zero", "-273", "°C")
const avogadro = new Constant("Avogadro constant", "6.022*10^23", "molecules per mole")
const R = new Constant("R constant", "8.316", "J / (Mole * °K)")
const thermCoeffExpansion = new Constant("Thermal Coefficient Expansion", "1 / 273 or 0.036", "")
const planck = new Constant("Planck constant", "6.6260693*10^-34", "(m^2 * kg) / (seconds)")
// Making some space
const planckMass = new Constant("Planck mass constant", "2.17645*10^-8", "kg")
const planckTime = new Constant("Planck time constant", "5.391*10^-44", "s")
const stefBoltz = new Constant("Stefan-Boltzmann Constant", "5.67*10^-8", "W/(m^2 * (°K)^4)")
const dielettric = new Constant("Dielettric constant (Vacuum Permittivity)", "8.854*10^-12", "Faraday/m")
const vacuumPermeability = new Constant("Vacuum Permeability", "1.256637*10^-6", "Henry/meter or N/A (Newton per Ampere)")
const elemCharge = new Constant("Elementary charge", "1.602e-19", "C")
const silverResistivity = new Constant("Silver resistivity (at 20 °C)", "1.59*10^-8", "Ohm*m")
const copperResistivity = new Constant("Copper resistivity (at 20 °C)", "1.68*10^-8", "Ohm*m")
const ironResistivity = new Constant("Iron resistivity (at 20 °C)", "9.7*10^-8", "Ohm*m")
const steelResistivity = new Constant("Steel resistivity (at 20 °C)", "69.0*10^-8", "Ohm*m")
// Making some space
const proportConst = new Constant("Proportionality constant", "2.7*10^-7", "N/(A^2)")
const weber = new Constant("Weber", "10^8", "Maxwell")
const tesla = new Constant("Tesla", "10^4", "Gauss")
const atomicMass = new Constant("Atomic mass", "1.66053*10^-27", "kg")
const airDensity = new Constant("Air Density", "1.29", "kg/(m^3)")
const waterDensity = new Constant("Water density", "10^3", "kg/(m^3)")
const heliumMass = new Constant("Helium mass", "5.006*10^-27", "kg")
const atm = new Constant("Atmosphere", "1.013*10^5", "Pascal")
const angstrom = new Constant("Angstrom", "10^-19", "m")
// Making some space
const waterViscosity0 = new Constant("Water viscosity at 0 °C", "1.8*10^-3", "Pascal*s")
const waterViscosity20 = new Constant("Water viscosity at 20 °C", "10*10^-3", "Pascal*s")
const copperConductivity = new Constant("Copper conductivity", "401", "W/(m * °K)")
const goldConductivity = new Constant("Gold conductivity (at 0 °C)", "318", "W/(m * °K)")
const ironConductivity = new Constant("Iron conductivity (at 0 °C)", "83.5", "W/(m * °K)")
const airConductivity = new Constant("Air conductivity (at 0 °C)", "0.024", "W/(m * °K)")

const constantsList = [absZero, airConductivity, airDensity, angstrom, atm, atomicMass, au, avogadro, c,
    copperConductivity, copperResistivity, dielettric, earthMass, earthRadius, electronMass, elemCharge, G, 
    goldConductivity, gravity, heliumMass, hubble, ironConductivity, ironResistivity, lightYear, moonMass,
    moonRadius, neutronMass, parsec, planck, planckMass, planckTime, proportConst, protonMass, R, silverResistivity,
    sound, steelResistivity, stefBoltz, sunMass, sunRadius, tesla, thermCoeffExpansion, vacuumPermeability, waterDensity, waterViscosity0,
    waterViscosity20, weber
];

window.onload = () => {
    loadFormulas()
    loadConstants()
}

function loadFormulas() {
    var documentationHtml = document.getElementById("functionsListHtml");
    var sideNav = document.getElementById("mySidenav");
    sideNav.innerHTML = "<h3><a>Formulas</a></h3>";
    for (var i=0; i<functionsList.length; i++) {
        const funcName = String(functionsList[i].name).split(" ")[0]
        documentationHtml.innerHTML += 
        "<div class='func'><div class='function-displayer' id="+ funcName +">" + functionsList[i].name + 
        "</div><br/><span class='codes'>Formula: " + functionsList[i].formula + 
        "</span><br /><span class='codes'>Measurement Unit: " + functionsList[i].measurementUnit + "</span></div><br />";

        sideNav.innerHTML += "<a href=#"+funcName+">"+ funcName+ "</a>";
    }
}

function loadConstants() {
    var documentationHtml = document.getElementById("constantsListHtml");
    var sideNav = document.getElementById("mySidenav");
    sideNav.innerHTML += "<h3><a>Constants</a></h3>";
    for (var i=0; i<constantsList.length; i++) {
        documentationHtml.innerHTML += 
        "<div class='func'><div class='function-displayer' id="+ constantsList[i].name +">" + constantsList[i].name + 
        "</div><br/><span class='codes'>Value: " + constantsList[i].value + " " + constantsList[i].measurementUnit + "</span></div><br />";

        sideNav.innerHTML += "<a href=#"+constantsList[i].name+">"+ constantsList[i].name+ "</a>";
    }
}
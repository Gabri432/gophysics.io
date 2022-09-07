class Formula {
    constructor(name, formula, measurementUnit) {
        this.name = name;
        this.formula = formula;
        this.measurementUnit = measurementUnit;
    }
}

const Acceleration = new Formula("func Acceleration(force, mass float64)", "force/mass.", "m/s^2")
const AngularFreq = new Formula("func AngularFreq(time float64)", "(2 * greekPi) / time", "rad/s")
const CentripetalAccel = new Formula("func CentripetalAccel(speed, radius float64)", "(speed^2) / radius", "m/s^2")
const CentripetalForce = new Formula("func CentripetalForce(mass, speed, radius float64)", "(mass * speed^2) / radius", "N")
const Density = new Formula("func Density(weight, volume float64)", "weight/volume", "kg/m^3")
// Making some space
const DopplerCloser = new Formula("func DopplerCloser(speed, frequence float64)", "(1 + (speed / 340)) * frequence", "hertz")
const DopplerFarer = new Formula("func DopplerFarer(speed, frequence float64)", "(1 - (speed / 340)) * frequence", "hertz")
const DriftSpeed = new Formula("func DriftSpeed(intensity, chargeCarrierDensity, area, particleCharge float64)", "intensity / (chargeCarrierDensity * area * particleCharge)", "m/s")
const ElectricField = new Formula("func ElectricField(charge, radius float64)", "(charge) / (4 * greekPi * Vacuum Premittivity constant * radius^2)", "N/C")
// Making some space
const ElectricPotentDiff = new Formula("func ElectricPotentDiff(charge, distance1, distance2 float64)", "(charge / (4 * greekPi * Vacuum Premittivity constant)) * ((1 / distance1) - (1 / distance2))", "V")
const ElectricPotentEnergyDiff = new Formula("func ElectricPotentEnergyDiff(charge1, charge2, distance1, distance2 float64)", "[(charge1 * charge2) / (4 * greekPi * Vacuum Premittivity constant)] * ((1 / distance1) - (1 / distance2))", "J")
const ElectricPotential = new Formula("func ElectricPotential(charge, distance float64)", "(charge) / (4 * greekPi * Vacuum Premittivity constant * distance)", "V")
const EnergyDens = new Formula("func EnergyDens(electricFieldModule float64)", "(1 / 2) * Vacuum Premittivity constant * (electricFieldModule * electricFieldModule)", "J/m^3")
const EnergyDensity = new Formula("func EnergyDensity(electricField, magneticField float64)", "(1/2)*Dieletric constant on vacuum*(electricField*electricField) + (1/(2*Vacuum Premittivity constant))*(magneticField*magneticField)", "J/m^3")
const EscapeSpeed = new Formula("func EscapeSpeed(mass, radius float64)", "[(2*G*mass)/(radius)]^(1/2)", "m/s")
// Making some space
const Force = new Formula("func Force(mass, acceleration float64)", "It calculates", "N")
const Frequency = new Formula("func Frequency(speed, distance float64)", "speed / distance", "hertz")
const GaussFlux = new Formula("func GaussFlux(charge float64)", "charge / Vacuum Premittivity constant", "N*m^2/C")
const GravAttract = new Formula("func GravAttract(mass1, mass2, distance float64)", "(G * mass1 * mass2) / (distance^2)", "m/s^2")
const GravField = new Formula("func GravField(mass, distance float64)", "(constants.G * mass) / (distance^2)", "m/s^2")
const HeatFlux = new Formula("func HeatFlux(thermalConductivityConstant, startingTemperatureKelvin, finalTemperatureKelvin, distance float64)", "-1 * thermalConductivityConstant * (finalTemperatureKelvin - startingTemperatureKelvin) / distance", "W")
const Intensity = new Formula("func Intensity(power, area float64)", "power/area", "W/m^2")
// Making some space
const JouleHeating = new Formula("func JouleHeating(resistance, currentIntensity float64)", "resistance * (currentIntensity * currentIntensity)", "W")
const KineticEner = new Formula("func KineticEner(mass, speed float64)", "(1 / 2) * mass * (speed * speed)", "J")
const LawCoulomb = new Formula("func LawCoulomb(charge1, charge2, distance float64)", "COULOMB constant * (|charge1| * |charge2|) / (distance^2)", "N")
const LawGayLussacPressure = new Formula("func LawGayLussacPressure(pressure, celsiusDeg_Temperature float64)", "pressure * (1 + (1/273)*(celsiusDeg_Temperature))", "Pascal")
const LawGayLussacVolume = new Formula("func LawGayLussacVolume(volume, celsiusDeg_Temperature float64)", "volume * (1 + (1/273)*(celsiusDeg_Temperature))", "m^3")
// Making some space
const LawHagenPoiseuille = new Formula("func LawHagenPoiseuille(fluidViscosity, pipeLength, flowRate, pipeRadius float64)", "((8 * fluidViscosity * pipeLength * flowRate) / (greekPi * pipeRadius^4))", "Pascal")
const LawOhm1 = new Formula("func LawOhm1(resistance, currentIntensity float64)", "resistance * currentIntensity", "V")
const LawOhm2 = new Formula("func LawOhm2(resistivity, length, area float64)", "resistivity * length / area", "Ohm")
const LawStokes = new Formula("func LawStokes(fluidViscosity, radius, speed float64)", "6 * greekPi * fluidViscosity * radius * speed", "N")
const LorentzFactor = new Formula("func LorentzFactor(speed float64)", "1/{[1-(speed^2)/(C^2)]^(1/2)}", "None")
// Making some space
const MechanicalEner = new Formula("func MechanicalEner(potential, kinetic float64)", "potential + kinetic", "J")
const Momentum = new Formula("func Momentum(mass, speed float64)", "mass * speed", "kg*m/s")
const NeatHeatEnergyTransfer = new Formula("func NetHeatEnergyTransfer(thermalConductivityConstant, area, kelvinDeg_HeatVariation, time, width float64)", "-1 * (thermalConductivityConstant * area * kelvinDeg_HeatVariation * time) / (width)", "J")
const NormalForce = new Formula("func NormalForce(mass, angleInDeg float64)", "", "N")
const PendulumPeriod = new Formula("func PendulumPeriod(pendulumLength float64)", "(2 * greekPi) * (pendulumLength/G)^(1/2)", "s")
const PhotoElettricEffect = new Formula("func PhotoElettricEffect(frequence float64)", "Planck constant * frequence", "J")
// Making some space
const PotentialElasticEner = new Formula("func PotentialElasticEner(elasticConstant, distance float64)", "(1 / 2) * elasticConstant * (distance^2)", "J")
const PotentialEner = new Formula("func PotentialEner(mass, acceleration, height float64)", "mass * acceleration * height", "J")
const PotentialGravEner = new Formula("func PotentialGravEner(mass, height float64)", "mass * g * height", "J")
const PotentialGravEner2 = new Formula("func PotentialGravEner2(mass1, mass2, distance float64)", "-1 * ((constants.G * mass1 * mass2) / (distance))", "J")
const Power = new Formula("func Power(work, time float64)", "work / time", "W")
// Making some space
const Pressure = new Formula("func Pressure(normalForce, area float64)", "normalForce / area", "Pascal")
const ProjectileFlightTime = new Formula("func ProjectileFlightTime(initialVelocity, angleInDeg float64)", "2 * initialVelocity * Sine(angleInDeg/1 radiant)", "s")
const ProjectileMaxHeight = new Formula("func ProjectileMaxHeight(initialVelocity, angleInDeg float64)", "(initialVelocity^2 * SineSquare(angleInDeg/1 radiant)) / (2 * G)", "m")
const ProjectileMaxRange = new Formula("func ProjectileMaxRange(initialVelocity, angleInDeg float64)", "(initialVelocity^2 * SineSquare(angleInDeg/1 radiant))", "m")
const RelativDist = new Formula("func RelativDist(nonTravelerDistance, speed float64)", "nonTravelerDistance/Y (Y=Lorentz factor)", "m")
const RelativMass = new Formula("func RelativMass(travelerMass, speed float64)", "mass*Y (Y=Lorentz factor)", "kg")
const RelativMomentum = new Formula("func RelativMomentum(travelerMomentum, speed float64)", "(travelerMomentum * speed)*Y (Y=Lorentz factor)", "kg*m/s")
const RelativTime = new Formula("func RelativTime(travelerTime, speed float64)", "travelerTime/Y (Y=Lorentz factor)", "s")
const Resistance = new Formula("func Resistance(resistance, currentIntensity float64)", "see 'JouleHeating'", "W")
// Making some space
const SelfCapacitance = new Formula("func SelfCapacitance(charge, potential float64)", "charge/potential", "C/V")
const SelfCapacitanceSphere = new Formula("func SelfCapacitanceSphere(radius float64)", "4 * greekPi * Vacuum Premittivity constant * radius", "C/V")
const Speed = new Formula("func Speed(distance, time float64)", "distance/time", "m/s")
const Time = new Formula("func Time(distance, speed float64)", "distance/speed", "s")
const Voltage = new Formula("func Voltage(charge, distance1, distance2 float64)", "see 'ElectricPotentDiff'", "V")
const Work = new Formula("func Work(force, distance float64)", "force*distance", "J")

const functionsList = [Acceleration, AngularFreq, CentripetalAccel, CentripetalForce, Density, DopplerCloser, 
    DopplerFarer, ElectricField, ElectricPotentDiff, ElectricPotentEnergyDiff, EnergyDens, EnergyDensity, EscapeSpeed,
    Force, Frequency, GaussFlux, GravAttract, GravField, HeatFlux, Intensity, LawCoulomb, LawGayLussacPressure, LawGayLussacVolume,
    LawHagenPoiseuille, LawOhm1, LawOhm2, LawStokes, LorentzFactor, MechanicalEner, Momentum, NeatHeatEnergyTransfer,
    NormalForce, PendulumPeriod, PhotoElettricEffect, PotentialElasticEner, PotentialEner, PotentialGravEner, PotentialGravEner2,
    Power, Pressure, ProjectileFlightTime, ProjectileMaxHeight, ProjectileMaxRange, RelativDist, RelativMass, RelativMomentum,
    RelativTime, Resistance, Time, Voltage, Work
]

window.onload = () => loadFormulas()

function loadFormulas() {
    var documentationHtml = document.getElementById("functionsListHtml");
    for (var i=0; i<functionsList.length; i++) {
        documentationHtml.innerHTML += "<div><span class='function-displayer'>" + functionsList[i].name + 
        "</span><br/><br /><span class='codes'>Formula: " + functionsList[i].formula + 
        "<br />Measurement Unit: " + functionsList[i].measurementUnit + "</span></div><br />";
    }
}
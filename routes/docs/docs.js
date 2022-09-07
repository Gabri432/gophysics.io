class Formula {
    constructor(name, formula, measurementUnit) {
        this.name = name;
        this.formula = formula;
        this.measurementUnit = measurementUnit;
    }
}

const Acceleration = new Formula("func Acceleration(force, mass float64) (value float64, measurementUnit string)", "force/mass.", "m/s^2")
const AngularFreq = new Formula("func AngularFreq(time float64) (value float64, measurementUnit string)", "(2 * greekPi) / time", "rad/s")
const CentripetalAccel = new Formula("func CentripetalAccel(speed, radius float64) (acceleration float64, measurementUnit string)", "(speed^2) / radius", "m/s^2")
const CentripetalForce = new Formula("func CentripetalForce(mass, speed, radius float64) (force float64, measurementUnit string)", "(mass * speed^2) / radius", "N")
const Density = new Formula("func Density(weight, volume float64) (value float64, measurementUnit string)", "weight/volume", "kg/m^3")
// Making some space
const DopplerCloser = new Formula("func DopplerCloser(speed, frequence float64) (frequency float64, measurementUnit string)", "(1 + (speed / 340)) * frequence", "hertz")
const DopplerFarer = new Formula("func DopplerFarer(speed, frequence float64) (frequency float64, measurementUnit string)", "(1 - (speed / 340)) * frequence", "hertz")
const DriftSpeed = new Formula("func DriftSpeed(intensity, chargeCarrierDensity, area, particleCharge float64) (driftVelocity float64, measurementUnit string)", "intensity / (chargeCarrierDensity * area * particleCharge)", "m/s")
const ElectricField = new Formula("func ElectricField(charge, radius float64) (value float64, measurementUnit string)", "(charge) / (4 * greekPi * Vacuum Premittivity constant * radius^2)", "N/C")
// Making some space
const ElectricPotentDiff = new Formula("func ElectricPotentDiff(charge, distance1, distance2 float64) (value float64, measurementUnit string)", "(charge / (4 * greekPi * Vacuum Premittivity constant)) * ((1 / distance1) - (1 / distance2))", "V")
const ElectricPotentEnergyDiff = new Formula("func ElectricPotentEnergyDiff(charge1, charge2, distance1, distance2 float64) (value float64, measurementUnit string)", "[(charge1 * charge2) / (4 * greekPi * Vacuum Premittivity constant)] * ((1 / distance1) - (1 / distance2))", "J")
const ElectricPotential = new Formula("func ElectricPotential(charge, distance float64) (value float64, measurementUnit string)", "(charge) / (4 * greekPi * Vacuum Premittivity constant * distance)", "V")
const EnergyDens = new Formula("func EnergyDens(electricFieldModule float64) (value float64, measurementUnit string)", "(1 / 2) * Vacuum Premittivity constant * (electricFieldModule * electricFieldModule)", "J/m^3")
const EnergyDensity = new Formula("func EnergyDensity(electricField, magneticField float64) (value float64, measurementUnit string)", "(1/2)*Dieletric constant on vacuum*(electricField*electricField) + (1/(2*Vacuum Premittivity constant))*(magneticField*magneticField)", "J/m^3")
const EscapeSpeed = new Formula("func EscapeSpeed(mass, radius float64) (value float64, measurementUnit string)", "[(2*G*mass)/(radius)]^(1/2)", "m/s")
// Making some space
const Force = new Formula("func Force(mass, acceleration float64) (value float64, measurementUnit string)", "It calculates", "N")
const Frequency = new Formula("func Frequency(speed, distance float64) (value float64, measurementUnit string)", "speed / distance", "hertz")
const GaussFlux = new Formula("func GaussFlux(charge float64) (value float64, measurementUnit string)", "charge / Vacuum Premittivity constant", "N*m^2/C")
const GravAttract = new Formula("func GravAttract(mass1, mass2, distance float64) (value float64, measurementUnit string)", "(G * mass1 * mass2) / (distance^2)", "m/s^2")
const GravField = new Formula("func GravField(mass, distance float64) (value float64, measurementUnit string)", "(constants.G * mass) / (distance^2)", "m/s^2")
const HeatFlux = new Formula("func HeatFlux(thermalConductivityConstant, startingTemperatureKelvin, finalTemperatureKelvin, distance float64) (value float64, measurementUnit string)", "-1 * thermalConductivityConstant * (finalTemperatureKelvin - startingTemperatureKelvin) / distance", "W")
const Intensity = new Formula("func Intensity(power, area float64) (value float64, measurementUnit string)", "power/area", "W/m^2")
// Making some space
const JouleHeating = new Formula("func JouleHeating(resistance, currentIntensity float64) (power float64, measurementUnit string)", "resistance * (currentIntensity * currentIntensity)", "W")
const KineticEner = new Formula("func KineticEner(mass, speed float64) (value float64, measurementUnit string)", "(1 / 2) * mass * (speed * speed)", "J")
const LawCoulomb = new Formula("func LawCoulomb(charge1, charge2, distance float64) (electroStaticForce float64, measurementUnit string)", "COULOMB constant * (|charge1| * |charge2|) / (distance^2)", "N")
const LawGayLussacPressure = new Formula("func LawGayLussacPressure(pressure, celsiusDeg_Temperature float64) (value float64, measurementUnit string)", "pressure * (1 + (1/273)*(celsiusDeg_Temperature))", "Pascal")
const LawGayLussacVolume = new Formula("func LawGayLussacVolume(volume, celsiusDeg_Temperature float64) (value float64, measurementUnit string)", "volume * (1 + (1/273)*(celsiusDeg_Temperature))", "m^3")
// Making some space
const LawHagenPoiseuille = new Formula("func LawHagenPoiseuille(fluidViscosity, pipeLength, flowRate, pipeRadius float64) (pressureDifference float64, measurementUnit string)", "((8 * fluidViscosity * pipeLength * flowRate) / (greekPi * pipeRadius^4))", "Pascal")
const LawOhm1 = new Formula("func LawOhm1(resistance, currentIntensity float64) (voltage float64, measurementUnit string)", "resistance * currentIntensity", "V")
const LawOhm2 = new Formula("func LawOhm2(resistivity, length, area float64) (electricalResistance float64, measurementUnit string)", "resistivity * length / area", "Ohm")
const LawStokes = new Formula("func LawStokes(fluidViscosity, radius, speed float64) (force float64, measurementUnit string)", "6 * greekPi * fluidViscosity * radius * speed", "N")
const LorentzFactor = new Formula("func LorentzFactor(speed float64) (lorentzFactor float64)", "1/{[1-(speed^2)/(C^2)]^(1/2)}", "None")
// Making some space
const MechanicalEner = new Formula("func MechanicalEner(potential, kinetic float64) (value float64, measurementUnit string)", "potential + kinetic", "J")
const Momentum = new Formula("func Momentum(mass, speed float64) (value float64, measurementUnit string)", "mass * speed", "kg*m/s")
const NeatHeatEnergyTransfer = new Formula("func NetHeatEnergyTransfer(thermalConductivityConstant, area, kelvinDeg_HeatVariation, time, width float64) float64", "-1 * (thermalConductivityConstant * area * kelvinDeg_HeatVariation * time) / (width)", "J")
const NormalForce = new Formula("func NormalForce(mass, angleInDeg float64) (force float64, measurementUnit string)", "", "N")
const PendulumPeriod = new Formula("func PendulumPeriod(pendulumLength float64) (time float64, measurementUnit string)", "(2 * greekPi) * (pendulumLength/G)^(1/2)", "s")
const PhotoElettricEffect = new Formula("func PhotoElettricEffect(frequence float64) (energy float64, measurementUnit string)", "Planck constant * frequence", "J")
// Making some space
const PotentialElasticEner = new Formula("func PotentialElasticEner(elasticConstant, distance float64) (value float64, measurementUnit string)", "(1 / 2) * elasticConstant * (distance^2)", "J")
const PotentialEner = new Formula("func PotentialEner(mass, acceleration, height float64) (value float64, measurementUnit string)", "mass * acceleration * height", "J")
const PotentialGravEner = new Formula("func PotentialGravEner(mass, height float64) (value float64, measurementUnit string)", "mass * g * height", "J")
const PotentialGravEner2 = new Formula("func PotentialGravEner2(mass1, mass2, distance float64) (value float64, measurementUnit string)", "-1 * ((constants.G * mass1 * mass2) / (distance))", "J")
const Power = new Formula("func Power(work, time float64) (value float64, measurementUnit string)", "work / time", "W")
// Making some space
const Pressure = new Formula("func Pressure(normalForce, area float64) (value float64, measurementUnit string)", "normalForce / area", "Pascal")
const ProjectileFlightTime = new Formula("func ProjectileFlightTime(initialVelocity, angleInDeg float64) (time float64, measurementUnit string)", "2 * initialVelocity * Sine(angleInDeg/1 radiant)", "s")
const ProjectileMaxHeight = new Formula("func ProjectileMaxHeight(initialVelocity, angleInDeg float64) (height float64, measurementUnit string)", "(initialVelocity^2 * SineSquare(angleInDeg/1 radiant)) / (2 * G)", "m")
const ProjectileMaxRange = new Formula("func ProjectileMaxRange(initialVelocity, angleInDeg float64) (length float64, measurementUnit string)", "(initialVelocity^2 * SineSquare(angleInDeg/1 radiant))", "m")
const RelativDist = new Formula("func RelativDist(nonTravelerDistance, speed float64) (contractedDistance float64, measurementUnit string)", "nonTravelerDistance/Y (Y=Lorentz factor)", "m")
const RelativMass = new Formula("func RelativMass(travelerMass, speed float64) (relativisticMass float64, measurementUnit string)", "mass*Y (Y=Lorentz factor)", "kg")
const RelativMomentum = new Formula("func RelativMomentum(travelerMomentum, speed float64) (relativisticMomentum float64, measurementUnit string)", "(travelerMomentum * speed)*Y (Y=Lorentz factor)", "kg*m/s")
const RelativTime = new Formula("func RelativTime(travelerTime, speed float64) (movingObserverTime float64, measurementUnit string)", "travelerTime/Y (Y=Lorentz factor)", "s")
const Resistance = new Formula("func Resistance(resistance, currentIntensity float64) (power float64, measurementUnit string)", "see 'JouleHeating'", "W")
// Making some space
const SelfCapacitance = new Formula("func SelfCapacitance(charge, potential float64) (coulombPotential float64, measurementUnit string)", "charge/potential", "C/V")
const SelfCapacitanceSphere = new Formula("func SelfCapacitanceSphere(radius float64) (coulombPotential float64, measurementUnit string)", "4 * greekPi * Vacuum Premittivity constant * radius", "C/V")
const Speed = new Formula("func Speed(distance, time float64) (value float64, measurementUnit string)", "distance/time", "m/s")
const Time = new Formula("func Time(distance, speed float64) (value float64, measurementUnit string)", "distance/speed", "s")
const Voltage = new Formula("func Voltage(charge, distance1, distance2 float64) (value float64, measurementUnit string)", "see 'ElectricPotentDiff'", "V")
const Work = new Formula("func Work(force, distance float64) (value float64, measurementUnit string)", "force*distance", "J")

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
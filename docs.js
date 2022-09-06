class Formula {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

const Acceleration = new Formula("func Acceleration(force, mass float64) (value float64, measurementUnit string)", "")
const AngularFreq = new Formula("func AngularFreq(time float64) (value float64, measurementUnit string)", "")
const CentripetalAccel = new Formula("func CentripetalAccel(speed, radius float64) (acceleration float64, measurementUnit string)", "")
const CentripetalForce = new Formula("func CentripetalForce(mass, speed, radius float64) (force float64, measurementUnit string)", "")
const Density = new Formula("func Density(weight, volume float64) (value float64, measurementUnit string)", "")
const DopplerCloser = new Formula("func DopplerCloser(speed, frequence float64) (frequency float64, measurementUnit string)", "")
const DopplerFarer = new Formula("func DopplerFarer(speed, frequence float64) (frequency float64, measurementUnit string)", "")
const DriftSpeed = new Formula("func DriftSpeed(intensity, chargeCarrierDensity, area, particleCharge float64) (driftVelocity float64, measurementUnit string)", "")
const ElectricField = new Formula("func ElectricField(charge, radius float64) (value float64, measurementUnit string)", "")
const ElectricPotentDiff = new Formula("func ElectricPotentDiff(charge, distance1, distance2 float64) (value float64, measurementUnit string)", "")
const ElectricPotentEnergyDiff = new Formula("func ElectricPotentEnergyDiff(charge1, charge2, distance1, distance2 float64) (value float64, measurementUnit string)", "")
const ElectricPotential = new Formula("func ElectricPotential(charge, distance float64) (value float64, measurementUnit string)", "")
const EnergyDens = new Formula("func EnergyDens(electricFieldModule float64) (value float64, measurementUnit string)", "")
const EnergyDensity = new Formula("func EnergyDensity(electricField, magneticField float64) (value float64, measurementUnit string)", "")
const EscapeSpeed = new Formula("func EscapeSpeed(mass, radius float64) (value float64, measurementUnit string)", "")
const Force = new Formula("func Force(mass, acceleration float64) (value float64, measurementUnit string)", "")
const Frequency = new Formula("func Frequency(speed, distance float64) (value float64, measurementUnit string)", "")
const GaussFlux = new Formula("func GaussFlux(charge float64) (value float64, measurementUnit string)", "")
const GravAttract = new Formula("func GravAttract(mass1, mass2, distance float64) (value float64, measurementUnit string)", "")
const GravField = new Formula("func GravField(mass, distance float64) (value float64, measurementUnit string)", "")
const HeatFlux = new Formula("func HeatFlux(thermalConductivityConstant, startingTemperatureKelvin, finalTemperatureKelvin, distance float64) (value float64, measurementUnit string)", "")
const Intensity = new Formula("func Intensity(power, area float64) (value float64, measurementUnit string)", "")
const JouleHeating = new Formula("func JouleHeating(resistance, currentIntensity float64) (power float64, measurementUnit string)", "")
const KineticEner = new Formula("func KineticEner(mass, speed float64) (value float64, measurementUnit string)", "")
const LawCoulomb = new Formula("func LawCoulomb(charge1, charge2, distance float64) (electroStaticForce float64, measurementUnit string)", "")
const LawGayLussacPressure = new Formula("func LawGayLussacPressure(pressure, celsiusDeg_Temperature float64) (value float64, measurementUnit string)", "")
const LawGayLussacVolume = new Formula("func LawGayLussacVolume(volume, celsiusDeg_Temperature float64) (value float64, measurementUnit string)", "")
const LawHagenPoiseuille = new Formula("func LawHagenPoiseuille(fluidViscosity, pipeLength, flowRate, pipeRadius float64) (pressureDifference float64, measurementUnit string)", "")
const LawOhm1 = new Formula("func LawOhm1(resistance, currentIntensity float64) (voltage float64, measurementUnit string)", "")
const LawOhm2 = new Formula("func LawOhm2(resistivity, length, area float64) (electricalResistance float64, measurementUnit string)", "")
const LawStokes = new Formula("func LawStokes(fluidViscosity, radius, speed float64) (force float64, measurementUnit string)", "")
const LorentzFactor = new Formula("func LorentzFactor(speed float64) (lorentzFactor float64)", "")
const MechanicalEner = new Formula("func MechanicalEner(potential, kinetic float64) (value float64, measurementUnit string)", "")
const Momentum = new Formula("func Momentum(mass, speed float64) (value float64, measurementUnit string)", "")
const NetHeatEnergyTransfer = new Formula("func NetHeatEnergyTransfer(thermalConductivityConstant, area, kelvinDeg_HeatVariation, time, width float64) float64", "")
const NormalForce = new Formula("func NormalForce(mass, angleInDeg float64) (force float64, measurementUnit string)", "")
const PendulumPeriod = new Formula("func PendulumPeriod(pendulumLength float64) (time float64, measurementUnit string)", "")
const PhotoElettricEffect = new Formula("func PhotoElettricEffect(frequence float64) (energy float64, measurementUnit string)", "")
const PotentialElasticEner = new Formula("func PotentialElasticEner(elasticConstant, distance float64) (value float64, measurementUnit string)", "")
const PotentialEner = new Formula("func PotentialEner(mass, acceleration, height float64) (value float64, measurementUnit string)", "")
const PotentialGravEner = new Formula("func PotentialGravEner(mass, height float64) (value float64, measurementUnit string)", "")
const PotentialGravEner2 = new Formula("func PotentialGravEner2(mass1, mass2, distance float64) (value float64, measurementUnit string)", "")
const Power = new Formula("func Power(work, time float64) (value float64, measurementUnit string)", "")
const Pressure = new Formula("func Pressure(normalForce, area float64) (value float64, measurementUnit string)", "")
const ProjectileFlightTime = new Formula("func ProjectileFlightTime(initialVelocity, angleInDeg float64) (time float64, measurementUnit string)", "")
const ProjectileMaxHeight = new Formula("func ProjectileMaxHeight(initialVelocity, angleInDeg float64) (height float64, measurementUnit string)", "")
const ProjectileMaxRange = new Formula("func ProjectileMaxRange(initialVelocity, angleInDeg float64) (length float64, measurementUnit string)", "")
const RelativDist = new Formula("func RelativDist(nonTravelerDistance, speed float64) (contractedDistance float64, measurementUnit string)", "")
const RelativMass = new Formula("func RelativMass(travelerMass, speed float64) (relativisticMass float64, measurementUnit string)", "")
const RelativMomentum = new Formula("func RelativMomentum(travelerMomentum, speed float64) (relativisticMomentum float64, measurementUnit string)", "")
const RelativTime = new Formula("func RelativTime(travelerTime, speed float64) (movingObserverTime float64, measurementUnit string)", "")
const Resistance = new Formula("func Resistance(resistance, currentIntensity float64) (power float64, measurementUnit string)", "")
const SelfCapacitance = new Formula("func SelfCapacitance(charge, potential float64) (coulombPotential float64, measurementUnit string)", "")
const SelfCapacitanceSphere = new Formula("func SelfCapacitanceSphere(radius float64) (coulombPotential float64, measurementUnit string)", "")
const Speed = new Formula("func Speed(distance, time float64) (value float64, measurementUnit string)", "")
const Time = new Formula("func Time(distance, speed float64) (value float64, measurementUnit string)", "")
const Voltage = new Formula("func Voltage(charge, distance1, distance2 float64) (value float64, measurementUnit string)", "")
const Work = new Formula("func Work(force, distance float64) (value float64, measurementUnit string)", "")

const functionsList = [Acceleration, AngularFreq, CentripetalAccel, CentripetalForce, Density, DopplerCloser, 
    DopplerFarer, ElectricField, ElectricPotentDiff, ElectricPotentEnergyDiff, EnergyDens, EnergyDensity, EscapeSpeed,
    Force, Frequency, GaussFlux, GravAttract, GravField, HeatFlux, Intensity, LawCoulomb, LawGayLussacPressure, LawGayLussacVolume,
    LawHagenPoiseuille, LawOhm1, LawOhm2, LawStokes, LorentzFactor, MechanicalEner, Momentum, NetHeatEnergyTransfer,
    NormalForce, PendulumPeriod, PhotoElettricEffect, PotentialElasticEner, PotentialEner, PotentialGravEner, PotentialGravEner2,
    Power, Pressure, ProjectileFlightTime, ProjectileMaxHeight, ProjectileMaxRange, RelativDist, RelativMass, RelativMomentum,
    RelativTime, Resistance, Time, Voltage, Work
]

window.onload = () => loadFormulas()

function loadFormulas() {
    var documentationHtml = document.getElementById("functionsListHtml");
    for (var i=0; i<functionsList.length; i++) {
        documentationHtml.innerHTML += "<div class='function-displayer'><h2>" + functionsList[i].name + "</h2><br/>" + 
        functionsList[i].description + "</div>";
    }
}
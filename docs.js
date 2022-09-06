class Formula {
    constructor(name, description) {
        this.name = name;
        this.description = description;
    }
}

const functionsList = [
    Formula("func Acceleration(force, mass float64) (value float64, measurementUnit string)", ""),
    Formula("func AngularFreq(time float64) (value float64, measurementUnit string)", ""),
    Formula("func CentripetalAccel(speed, radius float64) (acceleration float64, measurementUnit string)", ""),
    Formula("func CentripetalForce(mass, speed, radius float64) (force float64, measurementUnit string)", ""),
    Formula("func Density(weight, volume float64) (value float64, measurementUnit string)", ""),
    Formula("func DopplerCloser(speed, frequence float64) (frequency float64, measurementUnit string)", ""),
    Formula("func DopplerFarer(speed, frequence float64) (frequency float64, measurementUnit string)", ""),
    Formula("func DriftSpeed(intensity, chargeCarrierDensity, area, particleCharge float64) (driftVelocity float64, measurementUnit string)", ""),
    Formula("func ElectricField(charge, radius float64) (value float64, measurementUnit string)", ""),
    Formula("func ElectricPotentDiff(charge, distance1, distance2 float64) (value float64, measurementUnit string)", ""),
    Formula("func ElectricPotentEnergyDiff(charge1, charge2, distance1, distance2 float64) (value float64, measurementUnit string)", ""),
    Formula("func ElectricPotential(charge, distance float64) (value float64, measurementUnit string)", ""),
    Formula("func EnergyDens(electricFieldModule float64) (value float64, measurementUnit string)", ""),
    Formula("func EnergyDensity(electricField, magneticField float64) (value float64, measurementUnit string)", ""),
    Formula("func EscapeSpeed(mass, radius float64) (value float64, measurementUnit string)", ""),
    Formula("func Force(mass, acceleration float64) (value float64, measurementUnit string)", ""),
    Formula("func Frequency(speed, distance float64) (value float64, measurementUnit string)", ""),
    Formula("func GaussFlux(charge float64) (value float64, measurementUnit string)", ""),
    Formula("func GravAttract(mass1, mass2, distance float64) (value float64, measurementUnit string)", ""),
    Formula("func GravField(mass, distance float64) (value float64, measurementUnit string)", ""),
    Formula("func HeatFlux(...) (value float64, measurementUnit string)", ""),
    Formula("func Intensity(power, area float64) (value float64, measurementUnit string)", ""),
    Formula("func JouleHeating(resistance, currentIntensity float64) (power float64, measurementUnit string)", ""),
    Formula("func KineticEner(mass, speed float64) (value float64, measurementUnit string)", ""),
    Formula("func LawCoulomb(charge1, charge2, distance float64) (electroStaticForce float64, measurementUnit string)", ""),
    Formula("func LawGayLussacPressure(pressure, celsiusDeg_Temperature float64) (value float64, measurementUnit string)", ""),
    Formula("func LawGayLussacVolume(volume, celsiusDeg_Temperature float64) (value float64, measurementUnit string)", ""),
    Formula("func LawHagenPoiseuille(fluidViscosity, pipeLength, flowRate, pipeRadius float64) (pressureDifference float64, measurementUnit string)", ""),
    Formula("func LawOhm1(resistance, currentIntensity float64) (voltage float64, measurementUnit string)", ""),
    Formula("func LawOhm2(resistivity, length, area float64) (electricalResistance float64, measurementUnit string)", ""),
    Formula("func LawStokes(fluidViscosity, radius, speed float64) (force float64, measurementUnit string)", ""),
    Formula("func LorentzFactor(speed float64) (lorentzFactor float64)", ""),
    Formula("func MechanicalEner(potential, kinetic float64) (value float64, measurementUnit string)", ""),
    Formula("func Momentum(mass, speed float64) (value float64, measurementUnit string)", ""),
    Formula("func NetHeatEnergyTransfer(thermalConductivityConstant, area, kelvinDeg_HeatVariation, time, width float64) float64", ""),
    Formula("func NormalForce(mass, angleInDeg float64) (force float64, measurementUnit string)", ""),
    Formula("func PendulumPeriod(pendulumLength float64) (time float64, measurementUnit string)", ""),
    Formula("func PhotoElettricEffect(frequence float64) (energy float64, measurementUnit string)", ""),
    Formula("func PotentialElasticEner(elasticConstant, distance float64) (value float64, measurementUnit string)", ""),
    Formula("func PotentialEner(mass, acceleration, height float64) (value float64, measurementUnit string)", ""),
    Formula("func PotentialGravEner(mass, height float64) (value float64, measurementUnit string)", ""),
    Formula("func PotentialGravEner2(mass1, mass2, distance float64) (value float64, measurementUnit string)", ""),
    Formula("func Power(work, time float64) (value float64, measurementUnit string)", ""),
    Formula("func Pressure(normalForce, area float64) (value float64, measurementUnit string)", ""),
    Formula("func ProjectileFlightTime(initialVelocity, angleInDeg float64) (time float64, measurementUnit string)", ""),
    Formula("func ProjectileMaxHeight(initialVelocity, angleInDeg float64) (height float64, measurementUnit string)", ""),
    Formula("func ProjectileMaxRange(initialVelocity, angleInDeg float64) (length float64, measurementUnit string)", ""),
    Formula("func RelativDist(nonTravelerDistance, speed float64) (contractedDistance float64, measurementUnit string)", ""),
    Formula("func RelativMass(travelerMass, speed float64) (relativisticMass float64, measurementUnit string)", ""),
    Formula("func RelativMomentum(travelerMomentum, speed float64) (relativisticMomentum float64, measurementUnit string)", ""),
    Formula("func RelativTime(travelerTime, speed float64) (movingObserverTime float64, measurementUnit string)", ""),
    Formula("func Resistance(resistance, currentIntensity float64) (power float64, measurementUnit string)", ""),
    Formula("func SelfCapacitance(charge, potential float64) (coulombPotential float64, measurementUnit string)", ""),
    Formula("func SelfCapacitanceSphere(radius float64) (coulombPotential float64, measurementUnit string)", ""),
    Formula("func Speed(distance, time float64) (value float64, measurementUnit string)", ""),
    Formula("func Time(distance, speed float64) (value float64, measurementUnit string)", ""),
    Formula("func Voltage(charge, distance1, distance2 float64) (value float64, measurementUnit string)", ""),
    Formula("func Work(force, distance float64) (value float64, measurementUnit string)", "")
]



function loadFormulas() {
    var documentationHtml = document.getElementById("");
    for (var i=0; i<functionsList.length; i++) {}
}
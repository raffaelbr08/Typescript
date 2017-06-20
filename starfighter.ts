class MillenniumFalcon extends Spacecraft implements Containership{
	cargaContainers: number

	constructor(){
		super('hyperdrive')
		this.cargaContainers = 4
	}

	jumpIntoHyperspace(){
		if(Math.random() >= 0.5){
			super.jumpIntoHyperspace()
		}else{
			console.log('Failed to jump into hyperspace')
		}
	}
}
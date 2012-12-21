
Ext.define("Preventa.store.UnitatsStore", {
	extend: "Ext.data.Store",
	config: {
		model: "Preventa.model.UnitatsModel",
		data: [
			{ 
				id: 1,
				unit: "Cajas"
			},
			{ 
				id: 2,
				unit: "Unidades"
			},
			{ 
				id: 3,
				unit: "Kilogramos"
			},
			{
				id: 4,
				unit: "Gramos"
			}
		]
	}
});
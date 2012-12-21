
Ext.define("Preventa.store.ComercialStore", {
	extend: "Ext.data.Store",
	config: {
		model: "Preventa.model.ComercialModel",
		data: [
			{ 
				id: 1,
				name: "comercial1",
				password: "comercial1"
			},
			{ 
				id: 2,
				name: "comercial2",
				password: "comercial2"
			},
			{ 
				id: 3,
				name: "comercial3",
				password: "comercial3"
			}
		]
	}
});
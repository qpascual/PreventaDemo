
Ext.define("Preventa.store.CommandsStore", {
	extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
	config: {
		model: "Preventa.model.CommandModel",
		autoLoad: true,
		proxy: {
			type: 'localstorage',
			id: 'commandss-store'
		}
	}
});
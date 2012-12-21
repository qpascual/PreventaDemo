
Ext.define("Preventa.store.CommandProductStore", {
	extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
	config: {
		model: "Preventa.model.CommandProductModel",
		autoLoad: true,
		proxy: {
			type: 'localstorage',
			id: 'commandProducts-store'
		}
	}
});
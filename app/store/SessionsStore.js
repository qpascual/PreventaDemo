
Ext.define("Preventa.store.SessionsStore", {
	extend: "Ext.data.Store",
    requires: "Ext.data.proxy.LocalStorage",
	config: {
		model: "Preventa.model.SessionsModel",
		autoLoad: true,
		proxy: {
			type: 'localstorage',
			id: 'sessions-store'
		}
	}
});
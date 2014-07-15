(function (global) {
    var DataViewModel,
        app = global.app = global.app || {};

    DataViewModel = kendo.data.ObservableObject.extend({
        dataDataSource: null,

        init: function () {
            var that = this,
                dataSource,
                jsonUrlToLoad;

            kendo.data.ObservableObject.fn.init.apply(that, []);

            // use for local JSON file            
            //jsonUrlToLoad = "data/data.json";

            //When you build for Apache Cordova 3.0.0, apply this code instead of using relative URLs. In Apache Cordova 3.0.0, relative URLs might not work properly.
            //jsonUrlToLoad = app.makeUrlAbsolute("data/data.json");
            
            // use for remote JSONP
            jsonUrlToLoad = "TODO-YOUR-URL-HERE";

            dataSource = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: jsonUrlToLoad,
                        //dataType: "json", // use for local JSON file
                        dataType: "jsonp", // use for remote JSONP
           			 jsonpCallback: "doTheThing" // use for remote JSONP
                    }
                },
                schema  : {
                    // specify field containing data items:
                    data: "perk_types"
                    // or use parse if more complex:
                    // http://docs.telerik.com/kendo-ui/api/framework/datasource#configuration-schema.parse
                }
                
            });

            that.set("dataDataSource", dataSource);
        }
    });

    app.dataService = {
        viewModel: new DataViewModel()
    };
})(window);
//create our own service
var tickerService = SYMPHONY.services.register("hello:controller");

SYMPHONY.remote.hello().then(function(data) {
    SYMPHONY.application.register("hello", ["ui", "modules", "applications-nav"], ["hello:controller"]).then(function(response) {

        //system services
        var userId = response.userReferenceId;
        var uiService = SYMPHONY.services.subscribe("ui");
        var navService = SYMPHONY.services.subscribe("applications-nav");
        var modulesService = SYMPHONY.services.subscribe("modules");

        //add an entry to the left nav
        navService.add("hello-nav", {title: "Hello App"}, "hello:controller");

        //add a button to the hovercard that appears when hovering over cashtags
        uiService.registerExtension("cashtag", "hello", "hello:controller", {label: "Hello App Demo"});

        //implement some methods on our custom service. these will be invoked by user actions
        tickerService.implement({
            select: function(id) {
                //invoke the module service to show our own application in the grid
                modulesService.show("hello", {title: "Hello App"}, "hello:controller", "https://localhost:4000/app.html", {});
            },
            trigger: function(type, id, data) {
                //open our app in the grid with a URL parameter appended, this also uses the module service
                modulesService.show("hello", {title: "Hello App Demo!"}, "hello:controller", "https://localhost:4000/app.html?cashtag=" + data.entity.name, {});
            }
        });
    }.bind(this))
}.bind(this));

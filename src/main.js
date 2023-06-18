const fpeScript = document.createElement("script");
fpeScript.setAttribute("src", "/fpe.js");
document.body.appendChild(fpeScript);

looker.plugins.visualizations.add({
  id: "archilogic-floor-panel",
  label: "Archilogic Floor Panel",
  create: function (element) {
    var floorContainer = document.createElement("div");
    floorContainer.id = "fpe-plan";

    element.appendChild(floorContainer);
    setTimeout(() => {
      floorPlan = new FloorPlanEngine("fpe-plan");
      floorPlan.loadScene("edd55163-b23b-48f3-a602-ea5a0e658091", {
        publishableToken: "d5b83363-ddf0-4775-b6a3-0843dcd756ed",
      });
    }, 1000);
  },
  updateAsync: function (data, elemyent, config, queryResponse, details, done) {
    this.clearErrors();
    done();
  },
});

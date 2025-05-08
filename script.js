const elementDict = {
    "Earth": "#4f4",
    "Fire": "#f44",
    "Water": "#44f",
    "Air": "#ff4",
};
fetch("abilities.json")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        function addEl(child, parent) {
            parent.appendChild(child);
        }
        function createAndAppend(type, parent, content) {
            const el = document.createElement(type);
            el.innerHTML = content;
            addEl(el, parent);
        }
        const abilities = data.Abilities;
        const abilityTable = document.createElement("table");
        ['Name', 'Description', 'Upgrade', 'Type', 'Trigger'].forEach(header => {
            createAndAppend("th", abilityTable, header);
        });
        Object.keys(abilities).forEach(abilityName => {
            const ability = document.createElement("tr");
            ability.style.backgroundColor = elementDict[abilities[abilityName].Element] || "#fff";
            const abilityData = abilities[abilityName];
            [
                abilityName,
                abilityData.Description,
                abilityData.Upgrade.join("<hr>"),
                abilityData.Type,
                abilityData.Trigger.join("<hr>").replace(/,/g, "<br>")
            ].forEach(content => {
                createAndAppend('td', ability, content);
            });
            abilityTable.appendChild(ability);
        });
        document.getElementById("abilities").appendChild(abilityTable);
        Object.keys(elementDict).forEach(element => {
            const elementNode = document.getElementById(element);
            if (elementNode) {
                elementNode.style.backgroundColor = elementDict[element] || "#fff";
            }
        });
    })
    .catch(error => {
        console.error("Error loading abilities:", error);
    });
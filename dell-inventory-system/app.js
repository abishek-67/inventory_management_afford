var inventory = [
    "Dell XPS 13",
    "Dell XPS 15",
    "Dell XPS 17",
    "Dell Inspiron 14",
    "Dell Inspiron 15",
    "Dell Latitude 5540",
    "Dell Latitude 7440",
    "Dell Precision 5680",
    "Dell OptiPlex 7010",
    "Dell PowerEdge R760",
    "Dell UltraSharp U2723QE Monitor",
    "Dell S2722DGM Gaming Monitor"
];

function renderInventory() {
    var listContainer = document.getElementById("inventoryList");
    var emptyState = document.getElementById("emptyState");
    var totalCount = document.getElementById("totalCount");

    listContainer.innerHTML = "";
    totalCount.textContent = inventory.length;

    if (inventory.length === 0) {
        emptyState.style.display = "flex";
        return;
    }

    emptyState.style.display = "none";

    for (var i = 0; i < inventory.length; i++) {
        var li = document.createElement("li");
        li.className = "inventory-item";

        var indexSpan = document.createElement("span");
        indexSpan.className = "item-index";
        indexSpan.textContent = (i + 1).toString().padStart(2, "0");

        var nameSpan = document.createElement("span");
        nameSpan.className = "item-name";
        nameSpan.textContent = inventory[i];

        var badgeSpan = document.createElement("span");
        badgeSpan.className = "item-badge";
        badgeSpan.textContent = "In Stock";

        li.appendChild(indexSpan);
        li.appendChild(nameSpan);
        li.appendChild(badgeSpan);
        listContainer.appendChild(li);
    }
}

function addProduct() {
    var input = document.getElementById("addInput");
    var resultDiv = document.getElementById("addResult");
    var productName = input.value.trim();

    resultDiv.className = "action-result";

    if (productName === "") {
        resultDiv.textContent = "Please enter a product name.";
        resultDiv.classList.add("visible", "result-error");
        return;
    }

    inventory.push(productName);
    renderInventory();
    input.value = "";

    resultDiv.textContent = "\"" + productName + "\" has been added to inventory.";
    resultDiv.classList.add("visible", "result-added");

    clearResultAfterDelay(resultDiv);
}

function removeProduct() {
    var input = document.getElementById("removeInput");
    var resultDiv = document.getElementById("removeResult");
    var productName = input.value.trim();

    resultDiv.className = "action-result";

    if (productName === "") {
        resultDiv.textContent = "Please enter a product name.";
        resultDiv.classList.add("visible", "result-error");
        return;
    }

    var index = -1;
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].toLowerCase() === productName.toLowerCase()) {
            index = i;
            break;
        }
    }

    if (index !== -1) {
        inventory.splice(index, 1);
        renderInventory();
        input.value = "";
        resultDiv.textContent = "\"" + productName + "\" has been removed from inventory.";
        resultDiv.classList.add("visible", "result-removed");
    } else {
        resultDiv.textContent = "\"" + productName + "\" was not found in inventory.";
        resultDiv.classList.add("visible", "result-error");
    }

    clearResultAfterDelay(resultDiv);
}

function searchProduct() {
    var input = document.getElementById("searchInput");
    var resultDiv = document.getElementById("searchResult");
    var productName = input.value.trim();

    resultDiv.className = "search-result";

    if (productName === "") {
        resultDiv.textContent = "Please enter a product name to search.";
        resultDiv.classList.add("visible", "result-error");
        return;
    }

    var found = false;
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].toLowerCase() === productName.toLowerCase()) {
            found = true;
            break;
        }
    }

    if (found) {
        resultDiv.textContent = "Product is in stock";
        resultDiv.classList.add("visible", "result-in-stock");
    } else {
        resultDiv.textContent = "Product is out of stock";
        resultDiv.classList.add("visible", "result-out-of-stock");
    }

    clearResultAfterDelay(resultDiv);
}

function clearResultAfterDelay(element) {
    setTimeout(function () {
        element.classList.remove("visible");
    }, 4000);
}

document.addEventListener("DOMContentLoaded", function () {
    renderInventory();

    document.getElementById("searchInput").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            searchProduct();
        }
    });

    document.getElementById("addInput").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            addProduct();
        }
    });

    document.getElementById("removeInput").addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            removeProduct();
        }
    });
});

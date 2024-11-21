const reselta = document.getElementById("reselta");

function ac() {
    reselta.textContent = "0";
}

function suppDer() {
    if (reselta.textContent.length > 1) {
        reselta.textContent = reselta.textContent.slice(0, -1);
    } else {
        reselta.textContent = "0";
    }
}

function nombre(number) {
    if (reselta.textContent === "0") {
        reselta.textContent = number;
    } else {
        reselta.textContent += number;
    }
}

function operator(operator) {
    const dernier = reselta.textContent.slice(-1);
    if (!"+-*/%".includes(dernier)) {
        reselta.textContent += operator;
    }
}

function calculer() {
    try {
        reselta.textContent = eval(reselta.textContent);
    } catch (error) {
        reselta.textContent = "Error";
    }
}

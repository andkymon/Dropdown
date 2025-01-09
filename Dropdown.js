export function setDropdown(dropdownButton, dropdownContentWrapper, eventListener, hiddenClass = "hidden") {
    // Dropdown content wrapper is hidden by default
    dropdownContentWrapper.classList.add(hiddenClass);

    if (eventListener === "click") {
        setClickEventListener();
    } else if (eventListener === "hover") {
        setHoverEventListener();
    } else {
        console.error("Invalid event listener passed. Only 'click' or 'hover' is accepted.");
    }

    function setClickEventListener() {
        dropdownButton.addEventListener("click", () => {
            if (dropdownContentWrapper.classList.contains(hiddenClass)) {
                dropdownContentWrapper.classList.remove(hiddenClass);
            } else {
                dropdownContentWrapper.classList.add(hiddenClass);       
            }
        });
    }
    
    function setHoverEventListener() {
        dropdownButton.addEventListener("mouseover", () => {
            dropdownContentWrapper.classList.remove(hiddenClass);
        });
        dropdownButton.addEventListener("mouseout", () => {
            dropdownContentWrapper.classList.add(hiddenClass);       
        });
        // If mouse leaves dropdown button but moves into content, keep it visible
        dropdownContentWrapper.addEventListener("mouseover", () => {
            dropdownContentWrapper.classList.remove(hiddenClass);
        });
        dropdownContentWrapper.addEventListener("mouseout", () => {
            dropdownContentWrapper.classList.add(hiddenClass);       
        });
    }
}

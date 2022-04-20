 // $(document).ready(function () {
        //     jQuery(".quesion-dropdown").fadeOut();
        // });

        let isDropdownOpen = false;

        const openQuesDropdown = () => {
            if (isDropdownOpen == false) {

                // document.getElementById("question_chevron").classList.add("flip-h");
                // jQuery(".quesion-dropdown").fadeToggle(1000);

                document.getElementById("quesionDropdown").classList.add("fadeInDropdown");


                isDropdownOpen = !isDropdownOpen;
            } else if (isDropdownOpen == true) {
                document.getElementById("quesionDropdown").classList.remove("fadeInDropdown");
                // document.getElementById("question_chevron").classList.remove("flip-h");
                // jQuery(".quesion-dropdown").fadeToggle(1000);


                isDropdownOpen = !isDropdownOpen;
            }
        }

        const selectedOption = (selected) => {
            document.getElementById("deapartmentName").value = selected;
            openQuesDropdown();
        }

        // form submit funciton
        const submitForm = (event) => {
            event.preventDefault();
            let deapartmentName = document.getElementById("deapartmentName").value;
            let fullName = document.getElementById("fullName").value;
            let mobile = document.getElementById("mobile").value;
            let email = document.getElementById("email").value;
            let Summary = document.getElementById("Summary").value;

            if (deapartmentName == "") {
                document.getElementById("emptySubject").classList.add("show");
            }
            if (deapartmentName !== "") {
                document.getElementById("emptySubject").classList.remove("show");
            }
            if (fullName == "") {
                document.getElementById("emptyName").classList.add("show");
            }
            if (fullName !== "") {
                document.getElementById("emptyName").classList.remove("show");
            }
            if (mobile == "") {
                document.getElementById("emptyNumber").classList.add("show");
            }
            if (mobile !== "") {
                document.getElementById("emptyNumber").classList.remove("show");
            }
            if (email == "") {
                document.getElementById("emptyEmail").classList.add("show");
            }
            if (email !== "") {
                document.getElementById("emptyEmail").classList.remove("show");
            }
            if (Summary == "") {
                document.getElementById("emptyMessage").classList.add("show");
            }
            if (Summary !== "") {
                document.getElementById("emptyMessage").classList.remove("show");
            }

            console.log("fullName", fullName);
        }
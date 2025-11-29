//your JS code here. If required.
  const changeBtn = document.getElementById("change_button");
  const resetBtn = document.getElementById("Reset");

        function resetGrid() {
            for (let i = 1; i <= 9; i++) {
                document.getElementById(i).style.backgroundColor = "transparent";
            }
        }

        changeBtn.addEventListener("click", () => {
            const block = document.getElementById("block_id").value;
            const color = document.getElementById("colour_id").value;

            resetGrid(); 

            if (block >= 1 && block <= 9) {
                document.getElementById(block).style.backgroundColor = color;
            } else {
                alert("Please enter block id between 1 to 9");
            }
        });

        resetBtn.addEventListener("click", resetGrid);
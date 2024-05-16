const textInput = document.getElementById('text-input');
        const wordCount = document.getElementById('word-count');
        const charCount = document.getElementById('char-count');
        const fileInput = document.getElementById('file-input');

        textInput.addEventListener('input', updateCounts);
        fileInput.addEventListener('change', handleFile);

        function updateCounts() {
            const text = textInput.value.trim();
            const words = text.split(/\s+/).filter(Boolean);
            const characters = text.length;

            wordCount.textContent = words.length;
            charCount.textContent = characters;
        }

        function handleFile() {
            const file = fileInput.files[0];
            const reader = new FileReader();

            reader.onload = function (e) {
                const fileText = e.target.result;
                textInput.value = fileText;
                updateCounts();
            };

            reader.readAsText(file);
        }
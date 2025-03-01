<?php
// index.php - PHP datoteka koja ispisuje HTML s responzivnim hamburger menijem
?>
<!DOCTYPE html>
<html lang="hr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hamburger Menu</title>
    <style>
        /* Globalni stilovi */
        body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
        }
        
        /* Kontejner navigacije */
        .navbar {
            background-color: #333;
            overflow: hidden;
            position: relative;
        }
        
        /* Navigacijski linkovi (desktop) */
        .navbar .menu a {
            float: left;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }
        
        .navbar .menu a:hover {
            background-color: #ddd;
            color: #333;
        }
        
        /* Hamburger ikona */
        .hamburger {
            display: none;
            float: right;
            padding: 14px 16px;
            cursor: pointer;
        }
        
        .hamburger div {
            width: 25px;
            height: 3px;
            background-color: #f2f2f2;
            margin: 5px 0;
        }
        
        /* Padajući meni (mobilni) */
        .dropdown {
            display: none;
            flex-direction: column;
            background-color: #333;
        }
        
        .dropdown a {
            text-align: left;
            padding: 14px 16px;
            border-top: 1px solid #444;
            color: #f2f2f2;
            text-decoration: none;
        }
        
        .dropdown a:hover {
            background-color: #ddd;
            color: #333;
        }
        
        /* Responsivnost: sakrij desktop meni i prikaži hamburger na manjim ekranima */
        @media screen and (max-width: 768px) {
            .navbar .menu {
                display: none;
            }
            .hamburger {
                display: block;
            }
        }
    </style>
</head>
<body>
    <div class="navbar">
        <!-- Hamburger ikona koja se prikazuje na mobilnim uređajima -->
        <div class="hamburger" onclick="toggleMenu()">
            <div></div>
            <div></div>
            <div></div>
        </div>
        
        <!-- Standardni meni za desktop -->
        <div class="menu">
            <a href="#">Home</a>
            <a href="#">O nama</a>
            <a href="#">Usluge</a>
            <a href="#">Kontakt</a>
        </div>
        
        <!-- Padajući meni za mobilne uređaje -->
        <div class="dropdown" id="dropdownMenu">
            <a href="#">Home</a>
            <a href="#">O nama</a>
            <a href="#">Usluge</a>
            <a href="#">Kontakt</a>
        </div>
    </div>
    
    <script>
        // Funkcija za otvaranje/zatvaranje padajućeg menija
        function toggleMenu() {
            var dropdown = document.getElementById("dropdownMenu");
            if (dropdown.style.display === "flex") {
                dropdown.style.display = "none";
            } else {
                dropdown.style.display = "flex";
            }
        }
    </script>
</body>
</html>

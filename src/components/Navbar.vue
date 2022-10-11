<template>
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/">Home</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/about">About</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/axios-use">Weather Card</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link" to="/tabla">Ver Tabla</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
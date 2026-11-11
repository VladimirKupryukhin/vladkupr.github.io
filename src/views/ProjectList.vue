<template>
    <div>
        <h1>A list of project goes here</h1>
    </div>
    <div>
        <nav>
            <RouterLink class="navbar-master" to="/projects/craneaerospace">CraneAerospace Capstone</RouterLink>
            <RouterLink class="navbar-master" to="/projects/tfrmotherboard">TrickFire Motherboard</RouterLink>
        </nav>
    </div>
    <RouterView />
</template>
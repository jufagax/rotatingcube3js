import './style/main2.css'
import * as THREE from 'three'

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
    // Save sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Environnements
 */
// Scene
const scene = new THREE.Scene()

// Camera
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100)
// camera.position.y= 3
camera.position.z = 3


scene.add(camera)

// Test
const cube = new THREE.Mesh(new THREE.BoxBufferGeometry(1.5, 1.5, 1.5), new THREE.MeshNormalMaterial())
scene.add(cube)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.webgl')
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(sizes.width, sizes.height)


/**
 * Loop
 */
const loop = () =>
{
    // Update
    cube.rotation.y += 0.01
    cube.rotation.x += 0.01

    // Render
    renderer.render(scene, camera)

    // Keep looping
    window.requestAnimationFrame(loop)
}
loop()
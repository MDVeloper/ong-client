import axios from "axios"



export function getProject() {
    return async function(dispatch) {
        try {
            
            // Hablitar cuando se sepa la ruta que me trae las cosas del back
            // const projects = await axios.get(`http://localhost:3001/projects`)
            
            
            // data auxioliar hasta traer los datos de la base de datos
            let dataAux = [
                // data de los proyectos
                {
                img: "https://images.pexels.com/photos/10260685/pexels-photo-10260685.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                nameProject: "Proyecto 1",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
                longDescription:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate tempora facilis quisquam consectetur? Repellat, error totam, molestiae odio explicabo ipsum pariatur nam, deserunt suscipit at possimus adipisci reprehenderit doloremque quo. Alias, fuga impedit velit porro dolore dicta! Expedita itaque deserunt, voluptatem corporis mollitia nihil est dolor harum molestiae voluptatibus praesentium obcaecati exercitationem beatae non soluta! Cumque tempora aperiam ut aspernatur nisi consequatur laudantium voluptas consectetur at exercitationem explicabo ex voluptatum illum doloremque dicta veritatis, quis quae facilis! Hic, expedita vero. Laborum voluptatem quibusdam fuga est. Quis velit provident odio excepturi in magnam molestias maxime? Omnis officia suscipit consequuntur dolore! Fugiat, sequi exercitationem incidunt quibusdam tempore, veritatis optio reprehenderit modi dolor labore, dolores consectetur! Reiciendis expedita quam obcaecati quos beatae soluta recusandae suscipit deserunt iste? Sit iusto consequuntur error eum, modi ipsum voluptatem aliquam soluta saepe nobis dolorem, sunt nemo? Dolorem labore natus cum distinctio adipisci doloribus quidem nulla ea!",
                id: 1,
                },
                {
                img: "https://images.pexels.com/photos/9980612/pexels-photo-9980612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                nameProject: "Proyecto 2",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
                longDescription:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate tempora facilis quisquam consectetur? Repellat, error totam, molestiae odio explicabo ipsum pariatur nam, deserunt suscipit at possimus adipisci reprehenderit doloremque quo. Alias, fuga impedit velit porro dolore dicta! Expedita itaque deserunt, voluptatem corporis mollitia nihil est dolor harum molestiae voluptatibus praesentium obcaecati exercitationem beatae non soluta! Cumque tempora aperiam ut aspernatur nisi consequatur laudantium voluptas consectetur at exercitationem explicabo ex voluptatum illum doloremque dicta veritatis, quis quae facilis! Hic, expedita vero. Laborum voluptatem quibusdam fuga est. Quis velit provident odio excepturi in magnam molestias maxime? Omnis officia suscipit consequuntur dolore! Fugiat, sequi exercitationem incidunt quibusdam tempore, veritatis optio reprehenderit modi dolor labore, dolores consectetur! Reiciendis expedita quam obcaecati quos beatae soluta recusandae suscipit deserunt iste? Sit iusto consequuntur error eum, modi ipsum voluptatem aliquam soluta saepe nobis dolorem, sunt nemo? Dolorem labore natus cum distinctio adipisci doloribus quidem nulla ea!",
                id: 2,
                },
                {
                img: "https://images.pexels.com/photos/10001433/pexels-photo-10001433.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                nameProject: "Proyecto 3",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
                longDescription:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate tempora facilis quisquam consectetur? Repellat, error totam, molestiae odio explicabo ipsum pariatur nam, deserunt suscipit at possimus adipisci reprehenderit doloremque quo. Alias, fuga impedit velit porro dolore dicta! Expedita itaque deserunt, voluptatem corporis mollitia nihil est dolor harum molestiae voluptatibus praesentium obcaecati exercitationem beatae non soluta! Cumque tempora aperiam ut aspernatur nisi consequatur laudantium voluptas consectetur at exercitationem explicabo ex voluptatum illum doloremque dicta veritatis, quis quae facilis! Hic, expedita vero. Laborum voluptatem quibusdam fuga est. Quis velit provident odio excepturi in magnam molestias maxime? Omnis officia suscipit consequuntur dolore! Fugiat, sequi exercitationem incidunt quibusdam tempore, veritatis optio reprehenderit modi dolor labore, dolores consectetur! Reiciendis expedita quam obcaecati quos beatae soluta recusandae suscipit deserunt iste? Sit iusto consequuntur error eum, modi ipsum voluptatem aliquam soluta saepe nobis dolorem, sunt nemo? Dolorem labore natus cum distinctio adipisci doloribus quidem nulla ea!",
                id: 3,
                },
                {
                img: "https://images.pexels.com/photos/9969346/pexels-photo-9969346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                nameProject: "Proyecto 4",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
                longDescription:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate tempora facilis quisquam consectetur? Repellat, error totam, molestiae odio explicabo ipsum pariatur nam, deserunt suscipit at possimus adipisci reprehenderit doloremque quo. Alias, fuga impedit velit porro dolore dicta! Expedita itaque deserunt, voluptatem corporis mollitia nihil est dolor harum molestiae voluptatibus praesentium obcaecati exercitationem beatae non soluta! Cumque tempora aperiam ut aspernatur nisi consequatur laudantium voluptas consectetur at exercitationem explicabo ex voluptatum illum doloremque dicta veritatis, quis quae facilis! Hic, expedita vero. Laborum voluptatem quibusdam fuga est. Quis velit provident odio excepturi in magnam molestias maxime? Omnis officia suscipit consequuntur dolore! Fugiat, sequi exercitationem incidunt quibusdam tempore, veritatis optio reprehenderit modi dolor labore, dolores consectetur! Reiciendis expedita quam obcaecati quos beatae soluta recusandae suscipit deserunt iste? Sit iusto consequuntur error eum, modi ipsum voluptatem aliquam soluta saepe nobis dolorem, sunt nemo? Dolorem labore natus cum distinctio adipisci doloribus quidem nulla ea!",
                id: 4,
                },
                {
                img: "https://images.pexels.com/photos/9412345/pexels-photo-9412345.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                nameProject: "Proyecto 5",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
                longDescription:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate tempora facilis quisquam consectetur? Repellat, error totam, molestiae odio explicabo ipsum pariatur nam, deserunt suscipit at possimus adipisci reprehenderit doloremque quo. Alias, fuga impedit velit porro dolore dicta! Expedita itaque deserunt, voluptatem corporis mollitia nihil est dolor harum molestiae voluptatibus praesentium obcaecati exercitationem beatae non soluta! Cumque tempora aperiam ut aspernatur nisi consequatur laudantium voluptas consectetur at exercitationem explicabo ex voluptatum illum doloremque dicta veritatis, quis quae facilis! Hic, expedita vero. Laborum voluptatem quibusdam fuga est. Quis velit provident odio excepturi in magnam molestias maxime? Omnis officia suscipit consequuntur dolore! Fugiat, sequi exercitationem incidunt quibusdam tempore, veritatis optio reprehenderit modi dolor labore, dolores consectetur! Reiciendis expedita quam obcaecati quos beatae soluta recusandae suscipit deserunt iste? Sit iusto consequuntur error eum, modi ipsum voluptatem aliquam soluta saepe nobis dolorem, sunt nemo? Dolorem labore natus cum distinctio adipisci doloribus quidem nulla ea!",
                id: 5,
                },
                {
                img: "https://images.pexels.com/photos/1423066/pexels-photo-1423066.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
                nameProject: "Proyecto 6",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
                longDescription:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate tempora facilis quisquam consectetur? Repellat, error totam, molestiae odio explicabo ipsum pariatur nam, deserunt suscipit at possimus adipisci reprehenderit doloremque quo. Alias, fuga impedit velit porro dolore dicta! Expedita itaque deserunt, voluptatem corporis mollitia nihil est dolor harum molestiae voluptatibus praesentium obcaecati exercitationem beatae non soluta! Cumque tempora aperiam ut aspernatur nisi consequatur laudantium voluptas consectetur at exercitationem explicabo ex voluptatum illum doloremque dicta veritatis, quis quae facilis! Hic, expedita vero. Laborum voluptatem quibusdam fuga est. Quis velit provident odio excepturi in magnam molestias maxime? Omnis officia suscipit consequuntur dolore! Fugiat, sequi exercitationem incidunt quibusdam tempore, veritatis optio reprehenderit modi dolor labore, dolores consectetur! Reiciendis expedita quam obcaecati quos beatae soluta recusandae suscipit deserunt iste? Sit iusto consequuntur error eum, modi ipsum voluptatem aliquam soluta saepe nobis dolorem, sunt nemo? Dolorem labore natus cum distinctio adipisci doloribus quidem nulla ea!",
                id: 6,
                },
                {
                img: "https://images.pexels.com/photos/9937724/pexels-photo-9937724.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                nameProject: "Proyecto 7",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
                longDescription:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate tempora facilis quisquam consectetur? Repellat, error totam, molestiae odio explicabo ipsum pariatur nam, deserunt suscipit at possimus adipisci reprehenderit doloremque quo. Alias, fuga impedit velit porro dolore dicta! Expedita itaque deserunt, voluptatem corporis mollitia nihil est dolor harum molestiae voluptatibus praesentium obcaecati exercitationem beatae non soluta! Cumque tempora aperiam ut aspernatur nisi consequatur laudantium voluptas consectetur at exercitationem explicabo ex voluptatum illum doloremque dicta veritatis, quis quae facilis! Hic, expedita vero. Laborum voluptatem quibusdam fuga est. Quis velit provident odio excepturi in magnam molestias maxime? Omnis officia suscipit consequuntur dolore! Fugiat, sequi exercitationem incidunt quibusdam tempore, veritatis optio reprehenderit modi dolor labore, dolores consectetur! Reiciendis expedita quam obcaecati quos beatae soluta recusandae suscipit deserunt iste? Sit iusto consequuntur error eum, modi ipsum voluptatem aliquam soluta saepe nobis dolorem, sunt nemo? Dolorem labore natus cum distinctio adipisci doloribus quidem nulla ea!",
                id: 7,
                },
                {
                img: "https://images.pexels.com/photos/1460537/pexels-photo-1460537.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                nameProject: "Proyecto 8",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
                longDescription:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate tempora facilis quisquam consectetur? Repellat, error totam, molestiae odio explicabo ipsum pariatur nam, deserunt suscipit at possimus adipisci reprehenderit doloremque quo. Alias, fuga impedit velit porro dolore dicta! Expedita itaque deserunt, voluptatem corporis mollitia nihil est dolor harum molestiae voluptatibus praesentium obcaecati exercitationem beatae non soluta! Cumque tempora aperiam ut aspernatur nisi consequatur laudantium voluptas consectetur at exercitationem explicabo ex voluptatum illum doloremque dicta veritatis, quis quae facilis! Hic, expedita vero. Laborum voluptatem quibusdam fuga est. Quis velit provident odio excepturi in magnam molestias maxime? Omnis officia suscipit consequuntur dolore! Fugiat, sequi exercitationem incidunt quibusdam tempore, veritatis optio reprehenderit modi dolor labore, dolores consectetur! Reiciendis expedita quam obcaecati quos beatae soluta recusandae suscipit deserunt iste? Sit iusto consequuntur error eum, modi ipsum voluptatem aliquam soluta saepe nobis dolorem, sunt nemo? Dolorem labore natus cum distinctio adipisci doloribus quidem nulla ea!",
                id: 8,
                },
                {
                img: "https://images.pexels.com/photos/1460173/pexels-photo-1460173.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                nameProject: "Proyecto 9",
                description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt optio cumque totam quas delectus quo saepe ipsa corporis ullam! Consectetur.",
                longDescription:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos voluptate tempora facilis quisquam consectetur? Repellat, error totam, molestiae odio explicabo ipsum pariatur nam, deserunt suscipit at possimus adipisci reprehenderit doloremque quo. Alias, fuga impedit velit porro dolore dicta! Expedita itaque deserunt, voluptatem corporis mollitia nihil est dolor harum molestiae voluptatibus praesentium obcaecati exercitationem beatae non soluta! Cumque tempora aperiam ut aspernatur nisi consequatur laudantium voluptas consectetur at exercitationem explicabo ex voluptatum illum doloremque dicta veritatis, quis quae facilis! Hic, expedita vero. Laborum voluptatem quibusdam fuga est. Quis velit provident odio excepturi in magnam molestias maxime? Omnis officia suscipit consequuntur dolore! Fugiat, sequi exercitationem incidunt quibusdam tempore, veritatis optio reprehenderit modi dolor labore, dolores consectetur! Reiciendis expedita quam obcaecati quos beatae soluta recusandae suscipit deserunt iste? Sit iusto consequuntur error eum, modi ipsum voluptatem aliquam soluta saepe nobis dolorem, sunt nemo? Dolorem labore natus cum distinctio adipisci doloribus quidem nulla ea!",
                id: 9,
                },
            ];
            
            dispatch({
                type : "GET_PROJECT",
                payload : dataAux
            })
        

        } catch (e) {
            dispatch({
                type : "ERROR_GETPROJECTS",
                payload : "No se pudieron cargar los proyectos"
            })
        }
    }
}
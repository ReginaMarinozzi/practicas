import { useState, useEffect } from "react"
import Loader from "../Loader/Loader"
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useNavigate, useParams } from "react-router-dom"
import { Typography, Box, Grid, Stack, Card } from "@mui/material"

const RelatedItems = ({ categoria }) => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = categoria
            ? query(productosRef, where('categoria', '==', categoria))
            : productosRef

        getDocs(q)
            .then((resp) => {
                let productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                productosDB = productosDB.filter((producto) => {
                    return producto.id !== itemId;
                });
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoria, itemId])

    const navigate = useNavigate()
    const handleNavigation = (prodId) => {
        navigate(`/item/${prodId}`)
    }

    return (
        <Stack
            mt={10}
        >
            {loading
                ? <Loader />
                : <Stack productos={productos}>
                    <Typography
                        variant="h5"
                        component='h6'
                        align="center"
                    >
                        Productos Relacionados
                    </Typography>
                    <Grid container
                        spacing={4}
                    >
                        {productos.map((prod) => {
                            return <Grid item
                                md={3}
                                key={prod.id}
                            >
                                <Card
                                    elevation={5}
                                    onClick={handleNavigation}
                                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                >
                                    <Typography
                                        variant="h6"
                                        component='p'
                                        align="center"
                                        textTransform='capitalize'
                                    >
                                        {prod.nombre}
                                    </Typography>
                                    <Box
                                        sx={{ paddingBottom: 5 }}
                                        maxWidth="60%"
                                        component='img'
                                        src={prod.img}
                                        alt={prod.descripcion}
                                    />
                                </Card>

                            </Grid>
                        })}
                    </Grid>
                </Stack>
            }
        </Stack>
    )
}

export default RelatedItems

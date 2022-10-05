import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container } from '@mui/system'
import Loader from "../Loader/Loader"
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { Typography, Card, CardMedia, CardContent, Grid } from "@mui/material"

const RelatedItems = () => {
    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productosRef = collection(db, 'productos')
        const q = categoryId
            ? query(productosRef, where('categoria', '==', categoryId))
            : productosRef

        getDocs(q)
            .then((resp) => {
                const productosDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                setProductos(productosDB)
            })
            .finally(() => {
                setLoading(false)
            }
            )

    }, [categoryId])

    const navigate = useNavigate()
    const handleNavigation = (prodId) => {
        navigate(`/detail/${prodId}`)
    }

    return (
        <Container sx={{ marginTop: 10 }}>
            {loading
                ? <Loader />
                : <Container productos={productos} sx={{ marginTop: 5, marginBottom: 15 }}>
                    <Typography variant="h5" component='h5' align="center">
                        Productos Relacionados
                    </Typography>
                    <Container>
                        <Grid container my={4} spacing={4}>
                            {productos.map((prod) => {
                                return <Grid item md={4} key={prod.id}>
                                    <Card>
                                    <CardContent>{prod.nombre}</CardContent>
                                    <CardMedia onClick={() => handleNavigation(prod.id)} component="img" image={prod.img} alt={prod.descripcion} sx={{ borderRadius: `10px` }} />
                                    </Card>
                                </Grid>
                            })}
                        </Grid>
                    </Container>
                </Container>
            }
        </Container>
    )
}

export default RelatedItems


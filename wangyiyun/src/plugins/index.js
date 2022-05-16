import { Button, Swipe, SwipeItem } from 'vant';
let plugins = [
    Button, Swipe, SwipeItem
]
export default function getVant(app){
    plugins.forEach((item) =>{
        return app.use(item)
    })
}
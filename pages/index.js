import Grid from '~/components/grid';
import GridItem, { Tall, Large } from '~/components/gridItem';
import Card from '~/components/card';

export default () => (
    <Grid>
        <Card>
            <h1>Quokkas</h1>
            <p>All shapes and sizes</p>
            <a href="https://quok.in/200/300">https://quok.in/200/300</a>
        </Card>
        <GridItem>
            <img src="https://quok.in/508/377" />
        </GridItem>
        <GridItem>
            <img src="https://quok.in/508/377" />
        </GridItem>
        <Tall>
            <img src="https://quok.in/508/776" />
        </Tall>
        <GridItem>
            <img src="https://quok.in/508/377" />
        </GridItem>
        <Large>
            <img src="https://quok.in/1157/858" />
        </Large>
        <GridItem>
            <img src="https://quok.in/508/377" />
        </GridItem>
        <GridItem>
            <img src="https://quok.in/508/377" />
        </GridItem>
    </Grid>
);

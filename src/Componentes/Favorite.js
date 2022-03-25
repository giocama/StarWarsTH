import React from 'react'
import { Card, Grid } from 'semantic-ui-react';

export default function Favorite({ data  }) {
    return (
        <>
            <h1>Favorite</h1>
            <Grid columns={3}>
                {data.map((favorite, i) => {
                    return (
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header> {favorite.name} </Card.Header>
                                    <Card.Description>

                                        <strong>Height</strong>
                                        <p>{favorite.height}</p>

                                        <strong>Mass</strong>
                                        <p>{favorite.mass}</p>

                                        <strong>Birth Year</strong>
                                        <p>{favorite.birth_year}</p>

                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
        </>
    )
}
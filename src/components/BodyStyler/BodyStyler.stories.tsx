import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Typography from '@mui/material/Typography'

import Body from './BodyStyler'

const meta: Meta<typeof Body> = {
    title: 'Body Styler',
    component: Body,
}

export default meta

type Story = StoryObj<typeof meta>

export const Story1: Story = {
    name: 'Using MUI Components',
    render: () => {
        return (
            <Body>
                <Typography variant="h1" component="h1">
                    Hello.
                </Typography>
                <Typography variant="h2" component="h2">
                    My name is Amin Zabardast.
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                    style={{ paddingBottom: '10px' }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce at dui vitae erat dignissim fermentum. Aenean
                    convallis elit placerat sollicitudin pulvinar. Praesent{' '}
                    <a
                        href="https://google.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        sed
                    </a>{' '}
                    laoreet sem. Sed hendrerit at leo eu ullamcorper. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae; Nam nec lobortis odio. Curabitur
                    fermentum, enim sit amet blandit rhoncus, lectus velit
                    semper risus, sed bibendum sem lorem eu metus. Proin sit
                    amet libero magna. Mauris non semper leo. Ut scelerisque
                    quam felis, in varius elit vehicula at. Maecenas id sem
                    purus. Vestibulum ut leo non sem faucibus auctor vel maximus
                    mi.
                </Typography>
                <Typography variant="body1" component="p">
                    Nam laoreet laoreet velit, eu semper nisi ultrices id. Sed
                    tempor, augue at rutrum cursus, justo nibh gravida dui, nec
                    dictum risus ante vel lorem. Donec ornare justo ut ultricies
                    tincidunt. Mauris sed lectus felis. Quisque rhoncus
                    scelerisque nisi id euismod. Sed vel mattis libero. Mauris
                    euismod at tellus eu ultricies. Sed ac scelerisque velit.
                    Pellentesque nec fringilla lacus. Nulla at diam id orci
                    maximus pellentesque. Phasellus elementum, nunc a viverra
                    elementum, leo est facilisis lectus, vitae faucibus risus
                    orci ut purus. Phasellus ac venenatis ante. Mauris ipsum
                    libero, interdum ac metus non, aliquam malesuada sapien. Nam
                    vitae vehicula lacus. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Typography>
                <Typography variant="body1" component="p">
                    Quisque vel justo rutrum, egestas leo in, lacinia leo.
                    Aenean non turpis nisl. Donec sapien purus, aliquam non
                    vehicula sed, cursus id leo. Sed sed sapien vel mauris
                    venenatis venenatis. Integer varius est et dolor tristique,
                    eget accumsan nibh lacinia. Nunc bibendum nisl sit amet nisi
                    vestibulum, a euismod justo congue. Mauris pharetra vitae
                    turpis at ultrices. Duis vitae maximus leo.
                </Typography>
                <Typography variant="body1" component="p">
                    Nulla facilisi. Morbi sapien magna, vestibulum id urna et,
                    vehicula dignissim odio. Donec pellentesque bibendum sem, in
                    posuere felis vulputate ut. Class aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos.
                    Sed et ante id sapien convallis varius id sed elit.
                    Vestibulum venenatis justo at ante auctor, pulvinar blandit
                    sapien sodales. Aliquam hendrerit viverra accumsan. Integer
                    placerat, est quis porttitor molestie, mi lorem feugiat dui,
                    at ullamcorper est arcu vitae risus. Pellentesque efficitur
                    mi vel ante consectetur, eget maximus dui pharetra. Ut nec
                    urna at diam consectetur bibendum.
                </Typography>
                <Typography variant="body1" component="p">
                    Donec turpis purus, consequat malesuada mi vitae, tempus
                    feugiat diam. Vivamus tristique, eros vel pulvinar aliquam,
                    sem neque commodo augue, nec commodo nisl odio at augue.
                    Cras tempor mi sed mi imperdiet semper. Maecenas lacus eros,
                    tincidunt quis orci id, sodales pulvinar lorem. Nullam sed
                    interdum nibh, tempus viverra dolor. Nullam elementum mi
                    lorem, eu convallis neque placerat tincidunt. Quisque quis
                    diam quis odio dictum feugiat. Nulla finibus neque eu ligula
                    porta auctor. Fusce quis venenatis nisi. Maecenas placerat,
                    nunc tincidunt semper consequat, mauris nibh vehicula eros,
                    eget vestibulum erat magna in dui. Nunc consequat malesuada
                    tellus, nec dictum ipsum. Morbi pretium nisl a justo maximus
                    mattis. Vestibulum faucibus tellus tortor, eu tempor sapien
                    iaculis sit amet. Fusce vel vehicula arcu. Maecenas laoreet
                    sagittis cursus.
                </Typography>
            </Body>
        )
    },
}

export const Story2: Story = {
    name: 'Using Pure HTML',
    render: () => {
        return (
            <Body>
                <h1>Hello.</h1>
                <p>My name is Amin Zabardast.</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce at dui vitae erat dignissim fermentum. Aenean
                    convallis elit placerat sollicitudin pulvinar. Praesent{' '}
                    <a
                        href="https://google.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        sed
                    </a>{' '}
                    laoreet sem. Sed hendrerit at leo eu ullamcorper. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae; Nam nec lobortis odio. Curabitur
                    fermentum, enim sit amet blandit rhoncus, lectus velit
                    semper risus, sed bibendum sem lorem eu metus. Proin sit
                    amet libero magna. Mauris non semper leo. Ut scelerisque
                    quam felis, in varius elit vehicula at. Maecenas id sem
                    purus. Vestibulum ut leo non sem faucibus auctor vel maximus
                    mi.
                </p>
                <p>
                    Nam laoreet laoreet velit, eu semper nisi ultrices id. Sed
                    tempor, augue at rutrum cursus, justo nibh gravida dui, nec
                    dictum risus ante vel lorem. Donec ornare justo ut ultricies
                    tincidunt. Mauris sed lectus felis. Quisque rhoncus
                    scelerisque nisi id euismod. Sed vel mattis libero. Mauris
                    euismod at tellus eu ultricies. Sed ac scelerisque velit.
                    Pellentesque nec fringilla lacus. Nulla at diam id orci
                    maximus pellentesque. Phasellus elementum, nunc a viverra
                    elementum, leo est facilisis lectus, vitae faucibus risus
                    orci ut purus. Phasellus ac venenatis ante. Mauris ipsum
                    libero, interdum ac metus non, aliquam malesuada sapien. Nam
                    vitae vehicula lacus. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </p>
                <p>
                    Quisque vel justo rutrum, egestas leo in, lacinia leo.
                    Aenean non turpis nisl. Donec sapien purus, aliquam non
                    vehicula sed, cursus id leo. Sed sed sapien vel mauris
                    venenatis venenatis. Integer varius est et dolor tristique,
                    eget accumsan nibh lacinia. Nunc bibendum nisl sit amet nisi
                    vestibulum, a euismod justo congue. Mauris pharetra vitae
                    turpis at ultrices. Duis vitae maximus leo.
                </p>
                <p>
                    Nulla facilisi. Morbi sapien magna, vestibulum id urna et,
                    vehicula dignissim odio. Donec pellentesque bibendum sem, in
                    posuere felis vulputate ut. Class aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos.
                    Sed et ante id sapien convallis varius id sed elit.
                    Vestibulum venenatis justo at ante auctor, pulvinar blandit
                    sapien sodales. Aliquam hendrerit viverra accumsan. Integer
                    placerat, est quis porttitor molestie, mi lorem feugiat dui,
                    at ullamcorper est arcu vitae risus. Pellentesque efficitur
                    mi vel ante consectetur, eget maximus dui pharetra. Ut nec
                    urna at diam consectetur bibendum.
                </p>
                <p>
                    Donec turpis purus, consequat malesuada mi vitae, tempus
                    feugiat diam. Vivamus tristique, eros vel pulvinar aliquam,
                    sem neque commodo augue, nec commodo nisl odio at augue.
                    Cras tempor mi sed mi imperdiet semper. Maecenas lacus eros,
                    tincidunt quis orci id, sodales pulvinar lorem. Nullam sed
                    interdum nibh, tempus viverra dolor. Nullam elementum mi
                    lorem, eu convallis neque placerat tincidunt. Quisque quis
                    diam quis odio dictum feugiat. Nulla finibus neque eu ligula
                    porta auctor. Fusce quis venenatis nisi. Maecenas placerat,
                    nunc tincidunt semper consequat, mauris nibh vehicula eros,
                    eget vestibulum erat magna in dui. Nunc consequat malesuada
                    tellus, nec dictum ipsum. Morbi pretium nisl a justo maximus
                    mattis. Vestibulum faucibus tellus tortor, eu tempor sapien
                    iaculis sit amet. Fusce vel vehicula arcu. Maecenas laoreet
                    sagittis cursus.
                </p>
            </Body>
        )
    },
}

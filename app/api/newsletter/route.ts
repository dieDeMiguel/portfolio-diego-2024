export async function POST(request: Request) {
    const { email } = await request.json(); // Parse JSON data

    const data = {
        email,
        referrer_url: 'https://template-landing-nextjs-i18n.vercel.app',
    }

    // try to get the email before trying to subscribe
    const responseCheckAlreadyExist = await fetch(
        `https://api.buttondown.email/v1/subscribers/${email}`,
        {
            method: 'GET',
            headers: {
                Authorization: `Token ${process.env.API_BUTTONDOWN}`,
                'Content-Type': 'application/json',
            },
        }
    )

    const willBeNew = responseCheckAlreadyExist.status === 404

    if (!willBeNew) return new Response('Already subscribed', { status: 409 })

    return fetch('https://api.buttondown.email/v1/subscribers', {
        method: 'POST',
        headers: {
            Authorization: `Token ${process.env.API_BUTTONDOWN}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then((res) => {
        if (res.ok) {
            return new Response('Subscribed', { status: 201 })
        }
        return new Response('Failed to subscribe', { status: 500 })
    }
    )
}
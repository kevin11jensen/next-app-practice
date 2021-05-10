export default function Index() {

    return (
        <div className = 'container'>
            <h1>
                Hello Nadine Happy Belated Mothers Day Now Lets Sell Some Damn Shirts!
            </h1>
            <p>Your son is very intelligent and knows how to make websites that we can sell stuff on. I don't pretend I am a web developer like some folks at City Liquidators! I am actually a real life web developer that has experience!</p>
            <p>Love,<br/>Your emotionally abusive son</p>
            <style jsx>
                {`
                    .container {
                        height: 100vh;
                        background-color: pink;
                        margin: 0;
                        padding: 16px;
                        color: white;
                    }
                    h1 {
                        font-size: 2.4rem;
                    }
                    p {
                        font-size: 1.6rem;
                    }
                `}
            </style>
        </div>
    )
}
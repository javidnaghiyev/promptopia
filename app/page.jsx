import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Powered Promopts</span>
      </h1>
      <p1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid sint modi eum, a accusamus quo, recusandae architecto labore necessitatibus autem pariatur eligendi ipsam quas voluptatibus id, natus ex voluptates iure.
      </p1>

      <Feed />
    </section>
  )
}

export default Home
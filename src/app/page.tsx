import React from 'react'
import { fetchAllProducts } from '@/actions'
import ProductCard from '../components/product-card'
import Head from 'next/head'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
async function page() {
  const getAllProducts = await fetchAllProducts()
  const getSession = await auth()
  if (!getSession) redirect('/unauth-page')
  return (
    <div>
      <Head>
        <title>My Page | Next.js SEO</title>
        <meta
          name="description"
          content="This is the meta description for My Page"
        />
        {/* Additional meta tags */}
      </Head>
      <h1>Shopping Cart</h1>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto p-2">
        {getAllProducts && getAllProducts.data && getAllProducts.data.length > 0
          ? getAllProducts.data.map((productItem) => (
            <ProductCard item={productItem} />
          ))
          : null}
      </div>
    </div>
  )
}

export default page

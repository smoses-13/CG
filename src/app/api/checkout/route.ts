
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-06-30.basil', // Use the required Stripe API version
});

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: { name: 'Color Grading Needed' },
          unit_amount: 1999, // $10.00
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://ebook-landing-a7dp43xfr-smoses-13s-projects.vercel.app/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: `${process.env.NEXTAUTH_URL}/`,
    });

    if (!session.url) throw new Error('No URL generated');
    return NextResponse.json({ url: session.url });

  } catch (err) {
    console.error('Stripe error:', err);
    return NextResponse.json(
      { error: 'Checkout failed' }, 
      { status: 500 }
    );
  }
}
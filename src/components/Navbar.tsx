import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { Icons } from './Icons'
import NavItems from './NavItems'
import { buttonVariants } from './ui/button'
import Cart from './Cart'

export default function Navbar() {
    //dummy user
    const user = null;

    return (
        <div className='bg-white sticky z-50 top-0 inset-x-0 h-16'>
            <header className='relative bg-white'>
                <MaxWidthWrapper>
                    <div className='border-b border-gray-200'>
                        <div className='flex h-16 items-center'>
                            {/* TODO: mobile nav  */}
                            {/* ---------LOGO-----------  */}
                            <div className='ml-4      flex lg:ml-0'>
                                <Link href={'/'}>
                                    <Icons.logo className='h-10 w-10' />
                                </Link>
                            </div>
                            {/* -----------Desktop NAVIGATION-------------- */}
                            {/* -----------Nav Items--------------*/}
                            {/* -----------Right side Items--------------*/}
                            <div className='hidden ml-5 z-50 lg:ml lg:block lg:self-stretch'>
                                <NavItems />
                            </div>
                            {/* -----------Left side Items--------------*/}
                            <div className='ml-auto flex items-center'>
                                <div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
                                    {/* sign in button  */}
                                    {
                                        user ? null : (<Link href='/sign-in' className={buttonVariants({ variant: 'ghost' })}>Sign In
                                        </Link>
                                        )}
                                    {/* -----------------separator------------  */}
                                    {
                                        user ? null : (
                                            <span
                                                className='h-6 w-px bg-gray-200'
                                            />
                                        )
                                    }
                                    {/* register button  */}
                                    {
                                        user ? <p></p> : <Link href='/sign-up' className={buttonVariants({ variant: 'ghost' })}>
                                            Create an account
                                        </Link>
                                    }
                                    {/* -----------------separator------------  */}
                                    {
                                        user ? (
                                            <span
                                                className='h-6 w-px bg-gray-200'
                                            />
                                        ) : null
                                    }

                                    {
                                        user ? null : <div className='flex lg:ml-6'>
                                            <span
                                                className='h-6 w-px bg-gray-200'
                                            />
                                        </div>
                                    }

                                    <div className='ml-4 flow-root lg:ml-6'>
                                        <Cart />
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

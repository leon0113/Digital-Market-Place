'use client'

import { Icons } from '@/components/Icons'
import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { AuthCredentialsSchema, TAuthCredentialsSchema } from '@/lib/validators/sign-up-validatiors'
import { trpc } from '@/trpc/client'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

export default function SignUp() {


    const { register, handleSubmit, formState: { errors } } = useForm<TAuthCredentialsSchema>({
        resolver: zodResolver(AuthCredentialsSchema),
    })

    const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({})

    const onSubmit = ({ email, password }: TAuthCredentialsSchema) => {
        // send data to server
        mutate({ email, password })
    }

    return (
        <>
            <div className='container relative flex pt-20 flex-col items-center justify-center lg:px-0'>
                <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                    <div className='flex flex-col items-center space-y-2 text-center'>
                        {/* -------Icon and header---------------- */}
                        <Icons.logo className='h-20 w-20' />
                        <h1 className='text-2xl font-bold'>
                            Create an account
                        </h1>
                        {/* --------sign in link---------------  */}
                        <Link href={'sign-in'} className={buttonVariants({
                            variant: 'link'
                        })}>
                            Already have an account? Sign-in &rarr;
                        </Link>
                    </div>

                    {/* -------------------form---------------------- */}
                    <div className='grid gap-6'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid gap-2'>
                                {/* --------email------------ */}
                                <div className='grid gap-1 py-2'>
                                    <Label htmlFor='email'>Email</Label>
                                    <Input
                                        {...register('email')}
                                        className={cn({
                                            "focus-visible:ring-red-600": errors.email
                                        })}
                                        placeholder='email@example.com'
                                    />
                                </div>
                                {/* ---------password---------- */}
                                <div className='grid gap-1 py-2'>
                                    <Label htmlFor='password'>Password</Label>
                                    <Input
                                        {...register('password')}
                                        className={cn({
                                            "focus-visible:ring-red-600": errors.password
                                        })}
                                        placeholder='Password'
                                    />
                                </div>
                                {/* -----------button-------------- */}
                                <Button type="submit">Sign up</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

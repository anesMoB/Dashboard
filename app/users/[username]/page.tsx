
'use client'
import { useParams } from 'next/navigation'
import {
  Sheet,

  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import CardList from '@/components/Custom/CardList'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { BadgeCheck, Citrus, Shield } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import EditUserInformation from '@/components/Custom/EditUserInformation'
import { UserData } from '@/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChartLineDots } from '@/components/Custom/UserActivitesChart'



function SingleUserPage() {
  const { username } = useParams()
  return (
    <div className='w-full p-4'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{username}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="content w-full flex flex-col lg:flex-row gap-4 mt-3">
        {/* left section */}
        <div className='flex flex-col gap-4 w-full lg:w-1/3'>
          <div className='bg-primary-foreground rounded-lg p-4'>
            <h1 className='font-semibold '>User's Badges</h1>
            <div className='flex gap-4 mt-2'>
              <HoverCard openDelay={10} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <BadgeCheck className='bg-blue-500 text-white rounded-lg p-1' size={25} />
                </HoverCardTrigger>
                <HoverCardContent className="flex w-64 flex-col gap-0.5 font-semibold text-sm">
                  <div className="">Verified</div>
                  <div className=''>This user has been verified by the admin.</div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard openDelay={10} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Shield className='bg-green-500 text-white rounded-lg p-1' size={25} />
                </HoverCardTrigger>
                <HoverCardContent className="flex w-64 flex-col gap-0.5 font-semibold text-sm">
                  <div className="">Protected</div>
                  <div className=''>This user's account has two factor security enabled.</div>
                </HoverCardContent>
              </HoverCard>
              <HoverCard openDelay={10} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <Citrus className='bg-orange-400 text-white rounded-lg p-1' size={25} />
                </HoverCardTrigger>
                <HoverCardContent className="flex w-64 flex-col gap-0.5 font-semibold text-sm">
                  <div className="">Popular</div>
                  <div className=''>This user has been popularized by the community.</div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className='bg-primary-foreground rounded-lg p-4 '>
            <div className="header flex justify-between items-center">
              <h1 className='font-semibold mb-2'>User Information</h1>
              <Sheet>
                <SheetTrigger asChild>
                  <Button className='cursor-pointer py-1 text-sm bg-gray-500 px-2 text-white hover:text-black' >Edit Infos</Button>
                </SheetTrigger>
                <EditUserInformation userData={UserData}/>
              </Sheet>
            </div>

            <div>
              <p className='text-gray-400 text-[14px]'>Profile completion</p>
              <Progress className='mt-2' value={33} />
            </div>
            <div className='flex items-center gap-2 mt-3'>
              <p className=' font-semibold text-[14px]'>UserName:</p>
              <p className=' text-gray-200'>{username}</p>
            </div>
            <div className='flex items-center gap-2 mt-3'>
              <p className=' font-semibold text-[14px]'>Email:</p>
              <p className=' text-gray-200'>{UserData.email}</p>
            </div>
            <div className='flex items-center gap-2 mt-3'>
              <p className=' font-semibold text-[14px]'>Phone:</p>
              <p className=' text-gray-200'>{UserData.phone}</p>
            </div>
            <div className='flex items-center gap-2 mt-3'>
              <p className=' font-semibold text-[14px]'>Location:</p>
              <p className=' text-gray-200'>{UserData.location}</p>
            </div>
            <div className='flex items-center gap-2 mt-3 font-semibold'>
              <p className='  text-[14px]'>Role:</p>
              <p className=' text-gray-200 bg-gray-800 rounded-lg text-[14px] px-2 py-1'>{UserData.role}</p>
            </div>
            <div className='flex items-center gap-2 mt-3 font-semibold'>
              <p className='  text-[13px] text-gray-400'>Joined on: {UserData.joinedOn}</p>
            </div>
          </div>
          <div className='bg-primary-foreground rounded-lg p-4'>
            <CardList title="Recent Activity" />
          </div>
        </div>
        {/* right section */}
        <div className='flex flex-col gap-4 w-full lg:w-2/3'>
          <div className='bg-primary-foreground rounded-lg p-4'>
            <div className='flex items-center gap-4'>
              <Avatar>
              <AvatarImage src="https://media.licdn.com/dms/image/v2/D4E03AQGL3fWXCp5bDw/profile-displayphoto-scale_200_200/B4EZt2BZ5OJ0Ac-/0/1767211643099?e=2147483647&v=beta&t=_Il3LmS7GWtvg1d1GQBX_wEln7aDRQVB0gt7NjJLZew" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>
            <h1 className='text-lg font-semibold'>Anes Mob</h1>
            </div>
            <p className='text-gray-500 text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum voluptatem reiciendis id eius! Mollitia excepturi quis accusamus. Est iusto consectetur commodi consequuntur, in harum ratione veniam repellendus dolor maiores quam voluptatibus optio eaque corporis corrupti facilis molestiae vitae blanditiis! Asperiores, commodi cumque. Architecto in veritatis quae sunt et laudantium doloremque!.</p>
          </div>
          <div className='bg-primary-foreground rounded-lg p-4'>
            <ChartLineDots />
          </div>

        </div>
      </div>
    </div>
  )
}

export default SingleUserPage
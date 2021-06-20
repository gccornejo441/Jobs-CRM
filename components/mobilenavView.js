import { LogoutIcon } from '@heroicons/react/outline';
import { menu } from '../lib/menuset';
import {
    QuestionMarkCircleIcon,
    VariableIcon,
    CloudIcon,
} from '@heroicons/react/solid'

const MobileNavView = () => {
    let menuItems = menu.map(item => (
        <li class="hover:bg-cyan-700 rounded-lg my-2">
            <div class="flex justify-between" key={item.id}>
                <span class="flex">
                    <div class="p-2 text-cyan-500">
                        {item.icon}
                    </div>
                    <div class="p-2 w-max text-cyan-50">
                        {item.label}
                    </div>
                </span>
                {item.sublabel}
                {item.subIcon}
            </div>
        </li>
    ))
    return (
        <>
            <div class="bg-blue-900 h-screen w-screen">
                <div class="border-blue-800 mx-4">
                    <div class="text-blue-200 mr-2 border-b border-t border-blue-800">
                        <div class="flex relative z-10">
                            <span class="mr-3 mt-6 flex">
                                <img src="/images/profile_picture.jpg" class="h-16 w-16 rounded-full mr-2" />
                            </span>
                            <div class="mt-1 mb-4 relative">
                                <p class="text-xl font-thin text-cyan-50 mt-3 text-wrap">Welcome, Gabriel Cornejo</p>
                                <button class="bg-yellow-300 text-blue-900 p-2 rounded-lg text-sm my-2 flex">
                                    <span><LogoutIcon class="w-5 h-5" /></span>Sign Out</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul>
                            {menuItems}
                            <li class="hover:bg-cyan-700 rounded-lg my-2 border-t border-blue-800">
                                <div class="flex">
                                    <span class="p-2 text-cyan-500">
                                        <QuestionMarkCircleIcon class="h-5 w-5" />
                                    </span>
                                    <span class="p-2 text-cyan-50">
                                        Documentation
                                    </span>
                                </div>
                            </li>
                            <li class="hover:bg-cyan-700 rounded-lg my-2">
                                <div class="flex">
                                    <span class="p-2 text-cyan-500">
                                        <VariableIcon class="h-5 w-5" />
                                    </span>
                                    <span class="p-2 text-cyan-50">
                                        Conditions
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="bg-yellow-400 rounded-lg my-4 text-center py-2 text-sm w-1/2 mx-auto">
                        Upgrade to Pro
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileNavView;
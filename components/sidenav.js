import { menu } from '../lib/menuset';
import {
    QuestionMarkCircleIcon,
    VariableIcon,
    CloudIcon,
} from '@heroicons/react/solid'

const SideNav = () => {

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
            <div class="pl-3">
                <div>
                    <div>
                        <div>
                            <ul>
                                <li class=" ">
                                    <div class="flex">
                                        <span class="p-2 text-yellow-200">
                                            <CloudIcon class="h-5 w-5" />
                                        </span>
                                        <span class="text-cyan-50 p-2">
                                            Racket Space
                                        </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul>
                            {menuItems}
                            <li class="py-4">
                                <hr class="w-full bg-gray-900" />
                            </li>
                            <li class="hover:bg-cyan-700 rounded-lg my-2">
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
                </div>
            </div>
            <div class="bg-yellow-400 rounded-lg my-4 text-center py-2 text-sm">
                Upgrade to Pro
            </div>
        </>
    )
}

export default SideNav;
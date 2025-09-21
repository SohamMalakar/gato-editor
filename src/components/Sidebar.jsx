import { Tabs } from '@base-ui-components/react/tabs';

function Sidebar() {
  return (
    <div className="absolute inset-0 text-neutral-100 select-none">
      <Tabs.Root defaultValue="layers">
        <Tabs.List className="relative z-0 flex gap-1 px-1">
          <Tabs.Tab
            className="flex h-8 items-center justify-center px-3 text-sm font-medium whitespace-nowrap rounded-md
                       transition-all duration-200 ease-in-out
                       hover:bg-neutral-200/20
                       data-[selected]:text-neutral-900"
            value="layers"
          >
            Layers
          </Tabs.Tab>
          <Tabs.Tab
            className="flex h-8 items-center justify-center px-3 text-sm font-medium whitespace-nowrap rounded-md
                       transition-all duration-200 ease-in-out
                       hover:bg-neutral-200/20
                       data-[selected]:text-neutral-900"
            value="project"
          >
            Project
          </Tabs.Tab>
          <Tabs.Tab
            className="flex h-8 items-center justify-center px-3 text-sm font-medium whitespace-nowrap rounded-md
                       transition-all duration-200 ease-in-out
                       hover:bg-neutral-200/20
                       data-[selected]:text-neutral-900"
            value="properties"
          >
            Properties
          </Tabs.Tab>
          <Tabs.Indicator
            className="absolute top-1/2 left-0 z-[-1] h-8 w-[var(--active-tab-width)] 
                       translate-x-[var(--active-tab-left)] -translate-y-1/2 
                       rounded-md bg-neutral-100 shadow-sm
                       transition-all duration-300 ease-out"
          />
        </Tabs.List>
        <Tabs.Panel
          className="relative flex p-2"
          value="layers"
        >
          Add new layers
        </Tabs.Panel>
        <Tabs.Panel
          className="relative flex p-2"
          value="project"
        >
          Store project files here
        </Tabs.Panel>
        <Tabs.Panel
          className="relative flex p-2"
          value="properties"
        >
          Properties of the selected object
        </Tabs.Panel>
      </Tabs.Root>
    </div>
  )
}

export default Sidebar;

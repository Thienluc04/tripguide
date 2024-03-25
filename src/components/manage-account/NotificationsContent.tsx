import { Switch } from "../ui/switch";

interface NotificationsContentProps {}

export function NotificationsContent(props: NotificationsContentProps) {
  return (
    <div className="mt-[50px]">
      <div className="mb-12">
        <h2 className="mb-11 text-2xl font-medium leading-6 text-black2F dark:text-grayF6">
          Messages
        </h2>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Email
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications via email
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Text messages
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications via mobile phone
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Browser notifications
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications of your browser
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
      </div>
      <div className="mb-12">
        <h2 className="mb-11 text-2xl font-medium leading-6 text-black2F dark:text-grayF6">
          Promotions
        </h2>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Email
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications via email
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Text messages
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications via mobile phone
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Browser notifications
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications of your browser
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
      </div>
      <div className="mb-12">
        <h2 className="mb-11 text-2xl font-medium leading-6 text-black2F dark:text-grayF6">
          Reminders
        </h2>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Email
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications via email
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Text messages
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications via mobile phone
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Browser notifications
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications of your browser
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
      </div>
      <div className="mb-12">
        <h2 className="mb-11 text-2xl font-medium leading-6 text-black2F dark:text-grayF6">
          Policy and community
        </h2>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Email
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications via email
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Text messages
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications via mobile phone
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Browser notifications
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications of your browser
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
      </div>
      <div>
        <h2 className="mb-11 text-2xl font-medium leading-6 text-black2F dark:text-grayF6">
          Account support
        </h2>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Email
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications via email
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Text messages
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications via mobile phone
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
        <div className="mb-6 flex items-center justify-between border-b border-b-grayF3 pb-6 dark:border-b-black44">
          <div>
            <h3 className="mb-1 text-sm font-medium leading-6 text-black2F dark:text-grayF6 md:text-base">
              Browser notifications
            </h3>
            <p className="text-xs dark:text-gray8B md:text-base">
              Receive notifications of your browser
            </p>
          </div>
          <Switch
            id="email"
            className="h-6 w-12 bg-grayF3 dark:bg-grayC3 dark:data-[state=checked]:bg-blueE6"
          />
        </div>
      </div>
    </div>
  );
}

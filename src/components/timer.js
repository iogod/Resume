import * as dayjs from 'dayjs'
import RelativeTime from 'dayjs/plugin/relativeTime'
import UpdateLocale from 'dayjs/plugin/updateLocale'

    dayjs.extend(UpdateLocale).extend(RelativeTime)
    dayjs.updateLocale('en', {
        relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: 'just now',
          m: "1m ago",
          mm: "%d minutes ago",
          h: "1hr ago",
          hh: "%d hours ago",
          d: "1d ago",
          dd: "%d days ago",
          M: "1m ago",
          MM: "%d months ago",
          y: "1y ago",
          yy: "%dys ago"
        }
      })

      export default dayjs
        
      

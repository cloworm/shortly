import { ReactElement } from 'react'
import { useRecoilState } from 'recoil'
import { motion, AnimatePresence } from 'framer-motion'

import Link from '../components/Link'
import linksState from '../recoil/atoms/links'

const Links = (): ReactElement => {
  const [links] = useRecoilState(linksState)

  return (
    <div className="bg-theme_lightGray pt-2 px-6 lg:px-28">
      <AnimatePresence initial={false}>
        {
          links?.map((link) => {
            return (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: -50, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1  }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              >
                <Link key={`link-${link.id}`} link={link} />
              </motion.div>
            )
          })
        }
      </AnimatePresence>
    </div>
  )
}

export default Links

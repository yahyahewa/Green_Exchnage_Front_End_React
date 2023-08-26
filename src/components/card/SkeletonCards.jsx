/* eslint-disable react/prop-types */
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonCards({ cardNumber }) {
     return (
          <div className="gap-8  lg:grid px-4  lg:grid-cols-3 md:grid md:grid-cols-3 xsm:grid-cols-1   ">
               {Array(cardNumber).fill(0).map((_, index) => {
                    return (
               <div  key={index}>
     
               <div className="flex my-4"> 
                 <Skeleton circle width={50} height={50} />
                 </div>
                   <Skeleton count={1}/>
                   <Skeleton count={1}/>
                   <Skeleton count={1} height={160}/>

                 </div>

        );
      })}
    </div>
  )
}

export default SkeletonCards

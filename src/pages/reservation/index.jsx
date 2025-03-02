import PageHeader from '@/components/modules/pageHeader/PageHeader'
import ReservationDetail from '@/components/templates/reservation/ReservationDetail'
import React from 'react'

const Reservation = () => {
  return (
    <div>
      <PageHeader route='Reservation' />
      <ReservationDetail />
    </div>
  )
}

export default Reservation
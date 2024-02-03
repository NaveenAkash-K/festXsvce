import styles from '../../styles/events/eventInfo.module.css';
import eve from '../../assets/Ticket_img_svg_file_page-0001-removebg-preview.png';

function Events() {
  interface event{
    id:number,
    name:string,
    km:string
  }
  const eventDetail:event[]=[
    {id:1,name:'Event - 1 Name',km:'#know'},
    {id:2,name:'Event - 2 Name',km:'#know'},
    {id:3,name:'Event - 3 Name',km:'#know'},
    {id:4,name:'Event - 4 Name',km:'#know'}
  ]
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <a href="#Events">&larr; Back To Events</a>
        <div className={styles.list}>
          {eventDetail.map((data)=>(
            <div key={data.id} className={styles.cardContainer}>
            <img src={eve} alt="asda" className={styles.img} />
            <h4 className={styles.title}>{data.name}</h4>
            <h4 className={styles.know}>Know More</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Events

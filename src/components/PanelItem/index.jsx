export default function PanelItem({ name, value}) {
    return (
        <div style={{marginBottom: 5}}>
            <span style={{fontWeight: 500, marginRight: 10}}>{name}:</span>
            <span>{value}</span>
        </div>
    )
};
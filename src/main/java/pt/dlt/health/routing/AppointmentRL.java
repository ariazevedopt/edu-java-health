package pt.dlt.health.routing;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pt.dlt.health.bl.AppointmentBL;
import pt.dlt.health.dto.Appointment;

@RestController
public class AppointmentRL {

    private @Autowired AppointmentBL appointmentBL;
    
    @GetMapping("/appointments")
    public List<Appointment> getListAppointment() {
        return appointmentBL.getListAppointment();
    }

    @PostMapping("/appointments")
    Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentBL.createAppointment(appointment);
    }

    @GetMapping("/appointments/{id}")
    Appointment getAppointment(@PathVariable Long id) {
        return appointmentBL.getAppointment(id);
    }

    @DeleteMapping("/appointments/{id}")
    void deleteAppointment(@PathVariable Long id) {
        appointmentBL.deleteAppointment(id);
    }

}
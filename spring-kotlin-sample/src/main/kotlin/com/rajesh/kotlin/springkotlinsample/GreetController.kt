package com.rajesh.kotlin.springkotlinsample

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import java.util.concurrent.atomic.AtomicLong

@RestController
class GreetController{

    val counter = AtomicLong()

    @GetMapping("/greeting/{name}")
    fun greeting(@PathVariable(value = "name") name: String) =
            Greeting(counter.incrementAndGet(), "Hello, $name")

}

<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_that_true_is_true(): void
    {
        $this->assertTrue(true);
    }

    public function test_that_false_is_false(): void
    {
        $this->assertFalse(false);
    }

    public function testFailure(): void
    {
        $this->assertSame(1234, 1234);
    }

    public function testFailure2(): void
    {
        $this->assertEquals('receba', 'receba');
    }
}
